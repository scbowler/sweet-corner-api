const Sequelize = require('sequelize');
const { database, host, password, username } = require('../config').db;

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect: 'mysql',
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate().then(() => {
    console.log('\nConnected to MySQL DB\n');
}).catch(err => {
    console.log('\nError connecting to DB\n');
});

module.exports = sequelize;

require('./models');

sequelize.sync().then( async () => {
    await require('./initial_data/roles')();
    await require('./initial_data/users')();
    await require('./initial_data/images')();
    await require('./initial_data/products')();
});
