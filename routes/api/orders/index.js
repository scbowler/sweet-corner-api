const router = require('express').Router();
const { getAllUserOrders, getUserOrderDetails, newGuestOrder, newUserOrder } = require(__basedir + '/controllers/api/orders');
const { requireBasicAuth, withCart } = require(__basedir + '/routes/setup');
const { findOrCreateGuest } = require(__basedir + '/middleware/guest');

/*
    /api/orders routes
*/

router.get('/', requireBasicAuth, getAllUserOrders);

router.get('/:orderId', requireBasicAuth, getUserOrderDetails);

router.post('/', requireBasicAuth, withCart, newUserOrder);

router.post('/guest', findOrCreateGuest, withCart, newGuestOrder);

module.exports = router;
