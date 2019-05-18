const jwt = require('jwt-simple');
const { tokenForUser, userDataToSend } = require('./authentication');
const { carts, users, userRoles } = require(__basedir + '/db/models');
const validation = require(__basedir + '/helpers/validation');
const { StatusError } = require(__basedir + '/helpers/error_handling');
const { cartHeader, secret, tokenExpire } = require(__basedir + '/config').cart;

module.exports = async (req, res, next) => {
    const { email, firstName, lastName, password } = req.body;
    const { headers: { [cartHeader]: cartToken } } = req;
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

        if (existingUser) throw new StatusError(422, 'Email already in use');

        let user = null;

        try {
            const { id: roleId = null } = await userRoles.findByMid('customer', {
                attributes: ['id']
            }) || {};

            if(!roleId){
                throw new StatusError(500, 'Unable to create customer');
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
            throw new StatusError(500, 'Unable to create new user');
        }

        res.send({
            token: tokenForUser(user),
            user: userDataToSend(user)
        });
    } catch (err) {
        err.default = 'Error creating new account';
        next(err);
    }
}
