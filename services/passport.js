const passport = require('passport');
const LocalStrategy = require('passport-local');
const { users } = require('../db/models');

const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
    try {
        email = email.toLowerCase();

        let foundUser = await users.findOne({ where: { email } });

        if (!foundUser) return done(null, false);

        const isMatch = await foundUser.comparePasswords(password);

        if (!isMatch) return done(null, false);

        done(null, foundUser);
    } catch (err) {
        done(err);
    };
});

passport.use(localLogin);
