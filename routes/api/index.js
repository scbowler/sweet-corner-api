const router = require('express').Router();
const { notFound } = require(__basedir + '/controllers/errors');
const { test } = require(__basedir + '/controllers/api');
const { optionalAuth, withCart } = require(__basedir + '/routes/setup');

/*
    /api routes
*/

router.get('/test', test);

router.use('/cart', optionalAuth, withCart, require('./cart'));

router.use('/products', require('./products'));

router.all('*', notFound);

module.exports = router;
