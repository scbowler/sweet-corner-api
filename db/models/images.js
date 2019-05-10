const Sequelize = require('sequelize');
const { findByPid } = require('./interfaces');

module.exports = (db, users) => {
    const Images = db.define('images', {
        altText: {
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
        file: {
            allowNull: false,
            type: Sequelize.STRING
        },
        pid: {
            allowNull: false,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        type: {
            allowNull: false,
            type: Sequelize.ENUM('full_images', 'thumbnails'),
            defaultValue: 'full_images'
        }
    },
    {
        paranoid: true
    });

    Images.belongsTo(users, { as: 'createdBy', allowNull: false });

    Images.findByPid = findByPid;

    // Images.sync({ force: true });

    return Images;
}
