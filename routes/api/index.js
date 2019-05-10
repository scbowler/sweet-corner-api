const router = require('express').Router();
const { test } = require(__basedir + '/controllers/api');

/*
    /api routes
*/

router.get('/test', test);

router.use('/products', require('./products'));

module.exports = router;
