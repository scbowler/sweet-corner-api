const Sequelize = require('sequelize');
const { findByMid } = require('./interfaces');
const { Model } = Sequelize;

module.exports = sequelize => {
    class OrderStatuses extends Model {
        static findByMid(){
            return findByMid.apply(this, arguments);
        }
    }

    OrderStatuses.init({
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
    }, {
        modelName: 'orderStatuses',
        paranoid: true,
        sequelize,
    });

    return OrderStatuses;
}
