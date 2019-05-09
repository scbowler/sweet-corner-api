const jwt = require('jwt-simple');
const { secret } = require(__basedir + '/config').jwt;

exports.tokenForUser = user => ( jwt.encode({
        uid: user.id,
        ts: new Date().getTime()
    }, secret)
);

exports.userDataToSend = user => ({
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    pid: user.pid
});
