const router = require('express').Router();
const { notFound } = require(__basedir + '/controllers/errors');
const { test } = require(__basedir + '/controllers/api');
const { optionalAuth } = require(__basedir + '/routes/setup');
const { withCart } = require(__basedir + '/middleware/cart');

/*
    /api routes
*/

router.get('/test', test);

router.get('/cookie/set', (req, res) => {
    res.cookie('test', 'This is a regular cookie test: ' + new Date().toLocaleTimeString() );

    res.send('Cookies set!?');
});

router.get('/cookie/get', (req, res) => {
    console.log('Regular Cookies:', req.cookies);

    res.send({
        success: true,
        cookie: req.cookies.test
    });
});

router.get('/cookie/clear', (req, res) => {
    res.clearCookie('test')

    res.send('Cookie cleared');
});

router.use('/cart', optionalAuth, withCart, require('./cart'));
router.use('/products', require('./products'));

router.all('*', notFound);

module.exports = router;
