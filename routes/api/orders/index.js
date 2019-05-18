const router = require('express').Router();
const { getAllUserOrders, getUserOrderDetails, newUserOrder } = require(__basedir + '/controllers/api/orders');
const { requireBasicAuth, withCart } = require(__basedir + '/routes/setup');

/*
    /api/orders routes
*/

router.get('/', requireBasicAuth, getAllUserOrders);

router.get('/:orderId', requireBasicAuth, getUserOrderDetails);

router.post('/', requireBasicAuth, withCart, newUserOrder);

module.exports = router;
