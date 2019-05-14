const Sequelize = require('sequelize');

module.exports = (db, cart, product) => {
    const CartItem = db.define('cartItem', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER.UNSIGNED
        },
        quantity: {
            allowNull: false,
            type: Sequelize.INTEGER.UNSIGNED
        }
    },
    {
        paranoid: true
    });

    CartItem.belongsTo(cart, { as: 'cart', allowNull: false });
    CartItem.belongsTo(product, { as: 'product', allowNull: false });

    return CartItem;
}
