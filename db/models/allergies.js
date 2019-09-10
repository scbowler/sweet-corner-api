const Sequelize = require('sequelize');

module.exports = (db, products) => {
    const Allergies = db.define('allergies', {
        dairy: {
            allowNull: false,
            type: Sequelize.BOOLEAN
        },
        gluten: {
            allowNull: false,
            type: Sequelize.BOOLEAN
        },
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER.UNSIGNED
        },
        nuts: {
            allowNull: false,
            type: Sequelize.BOOLEAN
        }
    },
        {
            paranoid: true
        });

    Allergies.belongsTo(products, { as: 'product', allowNull: false });

    return Allergies;
}
