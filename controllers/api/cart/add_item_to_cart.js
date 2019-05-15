const { carts, cartItems, cartStatuses, products } = require(__basedir + '/db/models');
const validation = require(__basedir + '/helpers/validation');
const { StatusError } = require(__basedir + '/helpers/error_handling');

module.exports = async (req, res) => {
    try {
        const { body: { quantity = 1 }, params: { productId }, user } = req;
        let { cart } = req;
        let cartItem = null;

        if(!validation.pid(productId)) throw new StatusError(422, 'Invalid product id format');

        const { id: productShortId = null } = await products.findByPid(productId, {
            attributes: ['id']
        }) || {};

        if (!productShortId) throw new StatusError(422, `No product found with an ID of ${productId}`);

        if (!cart) {
            const { id: statusId = null } = await cartStatuses.findByMid('active', {
                attributes: ['id']
            }) || {};

            if(!statusId) throw new StatusError(500, 'Error setting cart status');

            cart = await carts.create({
                statusId,
                userId: user && user.id
            });

            if(!user){
                res.cookie('sc_cart_pid', cart.pid);
            }
        } else {
            cartItem = await cartItems.findOne({
                where: {
                    cartId: cart.id,
                    productId: productShortId
                }
            });

            if(cartItem){
                cartItem.quantity += parseInt(quantity);
            }
        }

        if(!cartItem){
            cartItem = await cartItems.build({
                cartId: cart.id,
                productId: productShortId,
                quantity
            });
        }

        await cartItem.save();

        const total = await cart.getTotals();

        res.send({
            cartId: cart.pid,
            message: `${quantity} items added to cart`,
            total
        });
    } catch(err) {
        err.default = 'Error adding item to cart';

        next(err);
    }
}
