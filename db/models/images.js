const Sequelize = require('sequelize');
const { findByPid } = require('./interfaces');

module.exports = db => {
    const Images = db.define('images', {
        altText: {
            allowNull: true,
            type: Sequelize.STRING
        },
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING
        },
        path: {
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
            type: Sequelize.ENUM('thumbnail', 'full'),
            defaultValue: 'full'
        }
    },
    {
        paranoid: true
    });

    Images.findByPid = findByPid;

    return Images;
}
