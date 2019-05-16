const router = require('express').Router();
const { notFound } = require(__basedir + '/controllers/errors');
const { addItem, deleteCart, getCurrent, removeItem, updateItem } = require(__basedir + '/controllers/api/cart');

/*
    /api/cart routes
*/

router.get('/', getCurrent);

router.delete('/:cartId', deleteCart);

router.post('/items/:productId', addItem);

router.patch('/items/:itemId', updateItem);

router.put('/items/:itemId', updateItem);

router.delete('/items/:itemId', removeItem);

router.all('*', notFound);

module.exports = router;
