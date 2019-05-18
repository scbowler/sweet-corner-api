const passport = require('passport');
const { basicAuth, getUserIfSignedIn } = require('../middleware/auth');
const { transferCart, withCart } = require('../middleware/cart');
const { cart: { cartHeader }, jwt: { authHeader } } = require('../config');
require('../services/passport');

exports.optionalAuth = getUserIfSignedIn(authHeader);
exports.requireBasicAuth = basicAuth(authHeader);
exports.requireSignIn = passport.authenticate('local', { session: false });
exports.transferCart = transferCart(cartHeader);
exports.withCart = withCart(cartHeader);
