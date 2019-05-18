const { cartItems, cartStatuses, orderItems, orderStatuses, orders } = require(__basedir + '/db/models');
const { StatusError } = require(__basedir + '/helpers/error_handling');

module.exports = async (req, res, next) => {


    return res.send({
        message: 'Create guest and create order coming soon!'
    });
    try {
        const { cart, user } = req;

        if (!cart) {
            throw new StatusError(422, 'No active cart for checkout');
        }

        const cItems = await cart.getItems(req, true);
        const cartTotals = await cart.getTotals();

        if (!cItems || !cItems.length) {
            throw new StatusError(422, 'No items in cart, unable to complete order');
        }

        const { id: pendingOrderId = null } = await orderStatuses.findByMid('pending', {
            attributes: ['id']
        }) || {};

        if (!pendingOrderId) {
            throw new StatusError(500, 'Error finding pending order status ID', false);
        }

        const { id: closedCartId = null } = await cartStatuses.findByMid('closed', {
            attributes: ['id']
        }) || {};

        if (!closedCartId) {
            throw new StatusError(500, 'Error finding closed cart status ID', false);
        }

        let order = await orders.findByCid(cart.id, {
            attributes: ['pid']
        });

        if (order) {
            throw new StatusError(422, [
                'An order has already been created for this cart',
                'The oder ID is at the last index of this errors array',
                order.pid
            ]);
        }

        order = await orders.create({
            itemCount: cartTotals.items,
            total: cartTotals.cost,
            cartId: cart.id,
            statusId: pendingOrderId,
            userId: user.id
        });

        await Promise.all(cItems.map(item => orderItems.create({
            each: item.each,
            quantity: item.quantity,
            orderId: order.id,
            productId: item.productId
        })));

        await cartItems.destroy({
            where: {
                cartId: cart.id
            }
        });

        await cart.update({
            statusId: closedCartId
        });

        await cart.destroy();

        res.send({
            message: 'Your order has been placed',
            id: order.pid
        });
    } catch (err) {
        err.default = 'Error creating new user order';

        next(err);
    }
}
