const { cartStatuses } = require('../models');
const { addToDatabase } = require(__basedir + '/helpers');
const defaultStatuses = [
    {
        description: 'Cart is new and empty',
        mid: 'new',
        name: 'New'
    },
    {
        description: 'Cart has items but the order has not been completed',
        mid: 'active',
        name: 'Active'
    },
    {
        description: 'Cart is no longer the currently active cart, but can be reactivated',
        mid: 'inactive',
        name: 'Inactive'
    },
    {
        description: 'The order has been completed and the cart is closed',
        mid: 'closed',
        name: 'Closed'
    },
    {
        description: 'The order has been canceled and the cart is closed',
        mid: 'canceled',
        name: 'Canceled'
    }
];

const match = d => ({ mid }) => (mid === d.mid);

module.exports = async () => addToDatabase(defaultStatuses, cartStatuses, match);
