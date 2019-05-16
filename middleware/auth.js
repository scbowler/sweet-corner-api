const jwt = require('jwt-simple');
const { users } = require('../db/models');
const { secret, tokenExpire } = require('../config').jwt;

exports.basicAuth = authHeaderKey => {
    if (!authHeaderKey) throw new Error('Missing Auth Header Key for apiRouteAuth middleware');
    return async (req, res, next) => {
        try {
            const token = req.headers[authHeaderKey];
            const user = await getUserFromToken(token);

            if (!user) return res.status(401).send('expired_token');

            req.user = user;
            next();
        } catch (err) {
            res.status(401).send('unauthorized');
        }
    }
}

exports.getUserIfSignedIn = authHeaderKey => {
    if (!authHeaderKey) throw new Error('Missing Auth Header Key for apiRouteAuth middleware');
    return async (req, res, next) => {
        try {
            const token = req.headers[authHeaderKey];

            if(!token) throw new Error('No token found');

            const user = await getUserFromToken(token);

            if(!user) throw new Error('Bad token');

            req.user = user;

            return next();
        } catch(err){
            req.user = null;
            return next();
        }
    }
}

async function getUserFromToken(token) {

    const { uid, ts } = jwt.decode(token, secret);
    const now = new Date().getTime();

    if (ts + tokenExpire < now) {
        return false;
    }

    const user = await users.findByPk(uid);

    if (!user) throw new Error('Not Authorized');

    user.lastAccessedAt = now;
    await user.save();

    return user;
}
