const Sequelize = require('sequelize');
const { findByPid, findByUid } = require('./interfaces');
const { Model } = Sequelize;

module.exports = (sequelize, carts, guests, orderStatuses, users) => {
    class Orders extends Model {
        static findByCid(cartId, options = {}) {
            return this.findOne({
                ...options,
                where: { cartId }
            });
        }
        
        static findByPid() {
            return findByPid.apply(this, arguments);
        }

        static findByPidAndUid(pid, userId, options = {}){
            return this.findOne({
                ...options,
                where: { pid, userId }
            });
        }

        static findByUid() {
            return findByUid.apply(this, arguments);
        }
    }

    Orders.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        itemCount: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        pid: {
            allowNull: false,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        total: {
            allowNull: false,
            type: Sequelize.INTEGER
        }
    }, {
        modelName: 'orders',
        paranoid: true,
        sequelize,
    });

    Orders.belongsTo(carts, { as: 'cart' });
    Orders.belongsTo(guests, { as: 'guest' });
    Orders.belongsTo(orderStatuses, { as: 'status' });
    Orders.belongsTo(users, { as: 'user' });

    return Orders;
}
