const { userDataToSend } = require('./authentication');

module.exports = (req, res) => {
    const { user } = req;

    res.send({
        user: userDataToSend(user)
    });
};
