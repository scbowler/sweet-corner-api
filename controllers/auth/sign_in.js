const { cartStatuses, carts } = require(__basedir + '/db/models');
const { tokenForUser, userDataToSend } = require('./authentication');

module.exports = async (req, res) => {
    const { user, cookies: { sc_cart_pid = null } } = req;

    try {
        if (sc_cart_pid) {
            const { id: statusId = null } = await cartStatuses.findByMid('active') || {};

            const cart = await carts.findOne({
                where: {
                    pid: sc_cart_pid,
                    statusId
                }
            });

            if (cart) {
                cart.userId = user.id;
                await cart.save();

                res.clearCookie('sc_cart_pid');
            }
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
