const db = require('../');

const userRoles = require('./user_roles')(db);

const users = require('./users')(db, userRoles);

const images = require('./images')(db, users);

const products = require('./products')(db, images, users);

const cartStatuses = require('./cart_statuses')(db);

const carts = require('./cart')(db, cartStatuses, users);

const cartItems = require('./cart_items')(db, carts, products);

module.exports = {
    carts,
    cartItems,
    cartStatuses,
    images,
    products,
    userRoles,
    users
}
