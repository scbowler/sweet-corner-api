const jwt = require('jwt-simple');
const { carts, cartItems } = require(__basedir + '/db/models');
const { StatusError } = require(__basedir + '/helpers/error_handling');
const { secret, tokenExpire } = require(__basedir + '/config').cart;

exports.withCart = cartHeader => {
    if(!cartHeader) throw new Error('Missing cart header key, check cart middleware config');
    return async (req, res, next) => {
        try {
            const { user } = req;
            let { [cartHeader]: cartToken } = req.headers;

            req.cart = null;

            if (cartToken === '[object Object]') cartToken = null;

            if (user) {
                req.cart = await carts.findActiveByUid(user.id);
            } else if (cartToken) {
                req.cart = await getCartFromToken(cartToken);
                req.cartToken = cartToken;
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
}

async function getCartFromToken(token){
    try {
        const { cartId, created } = jwt.decode(token, secret);
        const now = new Date().getTime();

        if (created + tokenExpire < now) {
            throw new StatusError(422, 'Cart token expired');
        }

        const cart = await carts.findActiveById(cartId);

        if (!cart) throw new StatusError(406, 'No active cart found with token data');

        return cart;
    } catch (err){

        if(!(err instanceof StatusError)){
            throw new StatusError(422, 'Invalid token');
        }

        throw err;
    }
}
