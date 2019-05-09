const { tokenForUser, userDataToSend } = require('./authentication');

module.exports = (req, res) => {
    const { user } = req;

    res.send({
        token: tokenForUser(user),
        user: userDataToSend(user)
    });
};
