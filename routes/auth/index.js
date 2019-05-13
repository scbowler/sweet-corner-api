const router = require('express').Router();
const { notFound } = require(__basedir + '/controllers/errors');
const { createAccount, jwtSignIn, signIn, test } = require(__basedir + '/controllers/auth');
const { requireBasicAuth, requireSignIn } = require('../setup.js');

/*
    /auth routes
*/

router.get('/test', test);

router.post('/create-account', createAccount);

router.post('/sign-in', requireSignIn, signIn);
router.get('/sign-in', requireBasicAuth, jwtSignIn);

router.all('*', notFound);

module.exports = router;
