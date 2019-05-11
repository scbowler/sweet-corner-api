const router = require('express').Router();
const { addItem, getCurrent } = require(__basedir + '/controllers/api/cart');

router.get('/', getCurrent);

router.post('/:productId', addItem);

module.exports = router;
