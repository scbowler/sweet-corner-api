const passport = require('passport');
const { basicAuth, getUserIfSignedIn } = require('../middleware/auth');
const { authHeader } = require('../config').jwt;
require('../services/passport');

exports.optionalAuth = getUserIfSignedIn(authHeader);
exports.requireBasicAuth = basicAuth(authHeader);
exports.requireSignIn = passport.authenticate('local', { session: false });
