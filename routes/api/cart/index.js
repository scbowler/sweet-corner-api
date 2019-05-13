const router = require('express').Router();
const { notFound } = require(__basedir + '/controllers/errors');
const { addItem, getCurrent } = require(__basedir + '/controllers/api/cart');

/*
    /api/cart routes
*/

router.get('/', getCurrent);

router.post('/:productId', addItem);

router.all('*', notFound);

module.exports = router;
