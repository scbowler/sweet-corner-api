const db = require('../');

const userRoles = require('./user_roles')(db);

const users = require('./users')(db, userRoles);

module.exports = {
    userRoles,
    users
}
