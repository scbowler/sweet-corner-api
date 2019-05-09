const { tokenForUser, userDataToSend } = require('./authentication');
const { users, userRoles } = require(__basedir + '/db/models');
const validation = require(__basedir + '/helpers/validation');
const { errorFlag, sendError, StatusError } = require(__basedir + '/helpers/error_handling');

module.exports = async (req, res) => {
    const { email, firstName, lastName, password } = req.body;
    const errors = [];

    try {
        if (!email) errors.push('No email address provided');
        else if (!validation.email(email)) errors.push('Invalid email address provided');

        if (!firstName) errors.push('No first name provided');
        else if (!validation.name(firstName)) errors.push('Invalid first name provided');

        if (!lastName) errors.push('No last name provided');
        else if (!validation.name(lastName)) errors.push('Invalid last name provided');

        if (!password) errors.push('No password provided');
        else if (!validation.password(password)) errors.push('Invalid password provided');

        if (errors.length) {
            throw new StatusError(422, errors);
        }

        const existingUser = await users.findOne({ where: { email } });

        if (existingUser) throw new StatusError(422, null, 'Email already in use' + errorFlag);

        let user = null;

        try {
            const { id: roleId = null } = await userRoles.findByMid('customer', {
                attributes: ['id']
            }) || {};

            if(!roleId){
                throw new StatusError(500, null, 'Unable to create customer' + errorFlag);
            }

            const newUser = users.build({
                email,
                firstName,
                lastName,
                password,
                roleId
            });

            user = await newUser.save();
        } catch (err) {
            console.log(err);
            throw new Error('Unable to create new user' + errorFlag);
        }

        res.send({
            token: tokenForUser(user),
            user: userDataToSend(user)
        });
    } catch (err) {
        sendError(res, err, 'Error creating new account');
    }
}
