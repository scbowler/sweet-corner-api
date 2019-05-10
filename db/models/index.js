const db = require('../');

const userRoles = require('./user_roles')(db);

const users = require('./users')(db, userRoles);

const images = require('./images')(db, users);

const products = require('./products')(db, images, users);

module.exports = {
    images,
    products,
    userRoles,
    users
}
