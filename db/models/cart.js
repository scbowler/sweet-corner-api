const Sequelize = require('sequelize');
const { findByPid } = require('./interfaces');

module.exports = (db, cartStatuses, users) => {
    const Cart = db.define('cart', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        pid: {
            allowNull: false,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        }
    },
    {
        paranoid: true
    });

    Cart.belongsTo(users, {as: 'user'});
    Cart.belongsTo(cartStatuses, {as: 'status', allowNull: false});

    Cart.findByPid = findByPid;

    return Cart;
}
