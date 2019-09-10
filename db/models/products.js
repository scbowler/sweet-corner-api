const Sequelize = require('sequelize');
const { findByPid } = require('./interfaces');

module.exports = (db, images, users) => {
    const Products = db.define('products', {
        calories: {
            allowNull: false,
            type: Sequelize.INTEGER.UNSIGNED
        },
        caption: {
            allowNull: true,
            type: Sequelize.STRING
        },
        cost: {
            allowNull: false,
            type: Sequelize.INTEGER.UNSIGNED
        },
        description: {
            allowNull: true,
            type: Sequelize.STRING
        },
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER.UNSIGNED
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING
        },
        pid: {
            allowNull: false,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
    },
    {
        paranoid: true
    });

    Products.belongsTo(users, { as: 'createdBy', allowNull: false });
    Products.belongsTo(images, { as: 'image', allowNull: false });
    Products.belongsTo(images, { as: 'thumbnail', allowNull: false });

    Products.findByPid = findByPid;

    return Products;
}
