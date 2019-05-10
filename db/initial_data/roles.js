const { userRoles } = require('../models');
const { addToDatabase } = require(__basedir + '/helpers');
const defaultRoles = [
    {
        description: 'Site administrator with full site access',
        mid: 'site_admin',
        name: 'Site Admin'
    },
    {
        description: 'Store manager, can add, remove, and delete products. Can review and process orders',
        mid: 'store_manager',
        name: 'Store Manager'
    },
    {
        description: 'Customer can only view order history and personal account settings',
        mid: 'customer',
        name: 'Customer'
    }
];

const match = d => ({mid}) => (mid === d.mid);

module.exports = async () => addToDatabase(defaultRoles, userRoles, match);
