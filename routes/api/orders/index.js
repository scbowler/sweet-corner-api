const router = require('express').Router();
const { newUserOrder } = require(__basedir + '/controllers/api/orders');
const { requireBasicAuth, withCart } = require(__basedir + '/routes/setup');

router.post('/', requireBasicAuth, withCart, newUserOrder);

module.exports = router;
