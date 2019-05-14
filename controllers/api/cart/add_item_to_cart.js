const { carts, cartItems, cartStatuses, products } = require(__basedir + '/db/models');
const validation = require(__basedir + '/helpers/validation');
const { StatusError } = require(__basedir + '/helpers/error_handling');

module.exports = async (req, res) => {
    try {
        const { body: { quantity = 1 }, params: { productId }, user } = req;
        let { cart } = req;

        if(!validation.pid(productId)) throw new StatusError(422, 'Invalid product id format');

        const { id: pid = null } = await products.findByPid(productId, {
            attributes: ['id']
        }) || {};

        if(!pid) throw new StatusError(422, `No product found with an ID of ${productId}`);

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
        }

        const newItem = await cartItems.create({
            cartId: cart.id,
            productId: pid,
            quantity
        });

        res.send({ message: 'Item added to cart' });
    } catch(err) {
        err.default = 'Error adding item to cart';

        next(err);
    }
}
