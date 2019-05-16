const { carts, cartItems } = require(__basedir + '/db/models');

exports.withCart = async (req, res, next) => {
    try {
        const { headers: { 'x-cart-id': cartId }, user } = req;

        req.cart = null;

        if (user) {
            req.cart = await carts.findActiveByUid(user.id);
        } else if (cartId) {
            req.cart = await carts.findActiveByPid(cartId);
        }

        if (req.cart) {
            req.cart.getTotals = req.cart.getTotals(cartItems);
            req.cart.getItems = req.cart.getItems(cartItems);
        }

        return next();
    } catch(err) {
        err.default = 'Error while retrieving cart data';

        next(err);
    }
}
