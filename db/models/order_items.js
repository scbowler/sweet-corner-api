const Sequelize = require('sequelize');
const { findByPid } = require('./interfaces');
const { Model } = Sequelize;

module.exports = (sequelize, orders, products) => {
    class OrderItems extends Model {
        static findByPid() {
            return findByPid.apply(this, arguments);
        }
        static findAllByOid(orderId, options = {}){
            return this.findAll({
                ...options,
                where: { orderId }
            });
        }
    }

    OrderItems.init({
        each: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
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
        },
        quantity: {
            allowNull: false,
            type: Sequelize.INTEGER
        }
    }, {
        modelName: 'orderItems',
        paranoid: true,
        sequelize
    });

    OrderItems.belongsTo(orders, { as: 'order' });
    OrderItems.belongsTo(products, { as: 'product' });

    return OrderItems;
}
