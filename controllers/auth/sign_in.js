const jwt = require('jwt-simple');
const { carts } = require(__basedir + '/db/models');
const { tokenForUser, userDataToSend } = require('./authentication');
const { cartHeader, secret, tokenExpire } = require(__basedir + '/config').cart;

module.exports = async (req, res) => {
    const { user, headers: { [cartHeader]: cartToken } } = req;

    try {
        if (cartToken) {
            try {
                const { cartId, created } = jwt.decode(cartToken, secret);

                const now = new Date().getTime();

                if (created + tokenExpire < now) {
                    throw new StatusError(422, 'Cart token expired');
                }

                const cart = await carts.findActiveById(cartId);

                if (cart) {
                    cart.userId = user.id;
                    await cart.save();
                }
            } catch(err){}
        }

        res.send({
            token: tokenForUser(user),
            user: userDataToSend(user)
        });
    } catch(err){
        err.default = 'Error signing in';

        next(err);
    }
};
