const Sequelize = require('sequelize');

module.exports = (db, products) => {
    const Nutrition = db.define('nutrition', {
        carbs: {
            allowNull: false,
            type: Sequelize.INTEGER.UNSIGNED
        },
        fat: {
            allowNull: false,
            type: Sequelize.INTEGER.UNSIGNED
        },
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER.UNSIGNED
        },
        sugar: {
            allowNull: false,
            type: Sequelize.INTEGER.UNSIGNED
        }
    },
        {
            paranoid: true
        });

    Nutrition.belongsTo(products, { as: 'product', allowNull: false });

    return Nutrition;
}
