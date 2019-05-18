const router = require('express').Router();
const { getAllUserOrders, getOrderDetails, newOrder } = require(__basedir + '/controllers/api/orders');
const { requireBasicAuth, withCart } = require(__basedir + '/routes/setup');
const { findGuest, findOrCreateGuest } = require(__basedir + '/middleware/guest');

/*
    /api/orders routes
*/

router.get('/', requireBasicAuth, getAllUserOrders);

router.get('/:orderId', requireBasicAuth, getOrderDetails);

router.post('/', requireBasicAuth, withCart, newOrder);

router.post('/guest', findOrCreateGuest, withCart, newOrder);

router.post('/guest/:orderId', findGuest, getOrderDetails);

module.exports = router;
