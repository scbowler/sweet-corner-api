const db = require('../');

const userRoles = require('./user_roles')(db);

const users = require('./users')(db, userRoles);

const images = require('./images')(db, users);

const products = require('./products')(db, images, users);

const cartStatuses = require('./cart_statuses')(db);

const carts = require('./cart')(db, cartStatuses, users);

const cartItems = require('./cart_items')(db, carts, products);

const guests = require('./guests')(db);

const orderStatuses = require('./order_statuses')(db);

const orders = require('./orders')(db, carts, guests, orderStatuses, users);

const orderItems = require('./order_items')(db, orders, products);

module.exports = {
    cartItems,
    cartStatuses,
    carts,
    guests,
    images,
    orderItems,
    orderStatuses,
    orders,
    products,
    userRoles,
    users
}
