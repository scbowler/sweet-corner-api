const router = require('express').Router();
const { notFound } = require(__basedir + '/controllers/errors');
const { addItem, deleteCart, getCurrent, removeItem } = require(__basedir + '/controllers/api/cart');

/*
    /api/cart routes
*/

router.get('/', getCurrent);

router.delete('/:cartId', deleteCart);

router.post('/items/:productId', addItem);

router.delete('/items/:productId', removeItem);

router.all('*', notFound);

module.exports = router;
