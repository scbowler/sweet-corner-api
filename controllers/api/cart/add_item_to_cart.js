const { carts, cartItems, cartStatuses, products } = require(__basedir + '/db/models');
const validation = require(__basedir + '/helpers/validation');
const { StatusError } = require(__basedir + '/helpers/error_handling');
const { createCartToken } = require('./helpers');

module.exports = async (req, res, next) => {
    try {
        const { body: { quantity = 1 }, params: { productId }, user } = req;
        let { cart } = req;
        let cartItem = null;

        if(!validation.pid(productId)) throw new StatusError(422, 'Invalid product id format');

        const { id: productShortId = null, name } = await products.findByPid(productId, {
            attributes: ['id', 'name']
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

            cart.getTotals = cart.getTotals(cartItems);

            if(!user){
                req.cartToken = createCartToken(cart.id);
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
                await cartItem.save();
            }
        }

        if(!cartItem){
            cartItem = await cartItems.create({
                cartId: cart.id,
                productId: productShortId,
                quantity
            });
        }

        await cart.cartUsed();

        const item = await cartItems.findByPkFormatted(cartItem.id, req);
        const total = await cart.getTotals();

        res.send({
            cartId: cart.pid,
            cartToken: req.cartToken,
            item,
            message: `${quantity} ${name} cupcake${quantity > 1 ? 's' : ''} added to cart`,
            total
        });
    } catch(err) {
        err.default = 'Error adding item to cart';

        next(err);
    }
}
