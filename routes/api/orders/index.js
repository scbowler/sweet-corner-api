const router = require('express').Router();
const { getAllUserOrders, getOrderDetails, newGuestOrder, newUserOrder } = require(__basedir + '/controllers/api/orders');
const { requireBasicAuth, withCart } = require(__basedir + '/routes/setup');
const { findGuest, findOrCreateGuest } = require(__basedir + '/middleware/guest');

/*
    /api/orders routes
*/

router.get('/', requireBasicAuth, getAllUserOrders);

router.get('/:orderId', requireBasicAuth, getOrderDetails);

router.post('/', requireBasicAuth, withCart, newUserOrder);

router.post('/guest', findOrCreateGuest, withCart, newGuestOrder);

router.post('/guest/:orderId', findGuest, getOrderDetails);

module.exports = router;
