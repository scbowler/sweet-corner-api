const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');
const { findByMid } = require('./interfaces');

module.exports = (db, roles) => {
    const Users = db.define('users', {
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
        lastName: {
            allowNull: false,
            type: Sequelize.STRING
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING(60)
        },
        pid: {
            allowNull: false,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        }
    },
    {
        hooks: {
            beforeCreate: async user => {
                const hash = await bcrypt.hash(user.password, 10);

                user.password = hash;
                user.email = user.email.toLowerCase();
            }
        },
        paranoid: true
    });

    Users.belongsTo(roles, { as: 'role' });

    Users.findByMid = findByMid;

    return Users;
}
