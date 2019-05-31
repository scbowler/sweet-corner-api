const { guests, users } = require(__basedir + '/db/models');
const validation = require(__basedir + '/helpers/validation');
const { StatusError } = require(__basedir + '/helpers/error_handling');

exports.findGuest = async (req, res, next) => {
    try {
        let { email } = req.body;

        if (!email && req.query.email){
            email = req.query.email;
        }

        if (!email) errors.push('No email address provided');
        else if (!validation.email(email)) errors.push('Invalid email address provided');

        const guest = await guests.findOne({ where: { email } });

        if (!guest) throw new StatusError(422, 'No information found with provided email');

        req.guest = guest;
        next();
    } catch(err) {
        err.default = 'Error finding information with provided email';

        next(err);
    }
}

exports.findOrCreateGuest = async (req, res, next) => {
    const { email, firstName, lastName } = req.body;
    const errors = [];

    try {
        if (!email) errors.push('No email address provided');
        else if (!validation.email(email)) errors.push('Invalid email address provided');

        if (!firstName) errors.push('No first name provided');
        else if (!validation.name(firstName)) errors.push('Invalid first name provided');

        if (!lastName) errors.push('No last name provided');
        else if (!validation.name(lastName)) errors.push('Invalid last name provided');

        if (errors.length) {
            throw new StatusError(422, errors);
        }

        const existingUser = await users.findOne({ where: { email } });

        if (existingUser) throw new StatusError(422, 'A user account exists with your email, please sign in.');

        const existingGuest = await guests.findOne({ where: { email } });

        if(existingGuest){
            if(existingGuest.firstName === firstName && existingGuest.lastName === lastName){
                await existingGuest.update({
                    lastAccessedAt: new Date()
                });

                req.guest = existingGuest;

                return next();
            }

            throw new StatusError(422, 'Your email has already been used as a guest, and the name you provided doesn\'t match our records');
        }
        
        const guest = await guests.create({
            email,
            firstName,
            lastName
        });

        req.guest = guest;
        next();
    } catch (err) {
        err.default = 'Error submitting order as guest';
        next(err);
    }
}
