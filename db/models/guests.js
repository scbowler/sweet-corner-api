const Sequelize = require('sequelize');
const { findByPid } = require('./interfaces');
const { Model } = Sequelize;

module.exports = sequelize => {
    class Guests extends Model {
        static findByPid(){
            return findByPid.apply(this, arguments);
        }
    }

    Guests.init({
        email: {
            allowNull: false,
            type: Sequelize.STRING,
            unique: true
        },
        firstName: {
            allowNull: false,
            type: Sequelize.STRING
        },
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        lastAccessedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        lastName: {
            allowNull: false,
            type: Sequelize.STRING
        },
        pid: {
            allowNull: false,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        }
    }, {
        modelName: 'guests',
        paranoid: true,
        sequelize
    });

    return Guests;
}
