const Sequelize = require('sequelize');
const { findByMid } = require('./interfaces');

module.exports = db => {
    const CartStatuses = db.define('cartStatuses', {
        description: {
            allowNull: true,
            type: Sequelize.STRING
        },
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        mid: {
            allowNull: false,
            type: Sequelize.STRING(40)
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING(64)
        }
    },
        {
            paranoid: true
        });

    CartStatuses.findByMid = findByMid;

    return CartStatuses;
}
