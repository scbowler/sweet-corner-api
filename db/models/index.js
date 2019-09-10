const db = require('../');

const userRoles = require('./user_roles')(db);

const users = require('./users')(db, userRoles);

const images = require('./images')(db, users);

const products = require('./products')(db, images, users);

const allergies = require('./allergies')(db, products);

const nutrition = require('./nutrition')(db, products);

const cartStatuses = require('./cart_statuses')(db);

const carts = require('./cart')(db, cartStatuses, users);

const cartItems = require('./cart_items')(db, carts, products);

const guests = require('./guests')(db);

const orderStatuses = require('./order_statuses')(db);

const orders = require('./orders')(db, carts, guests, orderStatuses, users);

const orderItems = require('./order_items')(db, orders, products);

products.hasOne(allergies);
products.hasOne(nutrition);

module.exports = {
    allergies,
    cartItems,
    cartStatuses,
    carts,
    guests,
    images,
    nutrition,
    orderItems,
    orderStatuses,
    orders,
    products,
    userRoles,
    users
}
