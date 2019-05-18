const jwt = require('jwt-simple');
const { carts } = require(__basedir + '/db/models');
const { tokenForUser, userDataToSend } = require('./authentication');
const { cartHeader, secret, tokenExpire } = require(__basedir + '/config').cart;

module.exports = async (req, res) => {
    const { user, headers: { [cartHeader]: cartToken } } = req;

    try {
        res.send({
            token: tokenForUser(user),
            user: userDataToSend(user)
        });
    } catch(err){
        err.default = 'Error signing in';

        next(err);
    }
};
