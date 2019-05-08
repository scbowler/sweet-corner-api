const router = require('express').Router();
const { test } = require(__basedir + '/controllers/auth');

/*
    /auth routes
*/

router.get('/test', test);

module.exports = router;