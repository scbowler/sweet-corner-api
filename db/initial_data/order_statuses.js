const { orderStatuses } = require('../models');
const { addToDatabase } = require(__basedir + '/helpers');
const defaultStatuses = [
    {
        description: 'Order created but not submitted',
        mid: 'new',
        name: 'New'
    },
    {
        description: 'Order placed, pending processing from store',
        mid: 'pending',
        name: 'Pending'
    },
    {
        description: 'Order is on hold',
        mid: 'hold',
        name: 'On Hold'
    },
    {
        description: 'Order has been shipped to customer',
        mid: 'shipped',
        name: 'Shipped'
    },
    {
        description: 'Order has been canceled',
        mid: 'canceled',
        name: 'Canceled'
    },
    {
        description: 'Order is complete',
        mid: 'complete',
        name: 'Complete'
    }
];

const match = d => ({ mid }) => (mid === d.mid);

module.exports = async () => addToDatabase(defaultStatuses, orderStatuses, match);
