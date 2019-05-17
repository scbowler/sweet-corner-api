const jwt = require('jwt-simple');
const { secret } = require(__basedir + '/config').cart;

exports.createCartToken = cartId => jwt.encode({
    cartId,
    created: new Date().getTime()
}, secret);
