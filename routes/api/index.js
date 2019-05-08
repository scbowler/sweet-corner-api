const router = require('express').Router();
const { test } = require(__basedir + '/controllers/api');

/*
    /api routes
*/

router.get('/test', test);

module.exports = router;
