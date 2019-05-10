const { users, userRoles } = require('../models');
const { initialUser } = require(__basedir + '/config/db');
const bcrypt = require('bcryptjs');
const { addToDatabase } = require(__basedir + '/helpers');

const buildDefaultUsers = async () => {
    const { email, firstName, lastName, password: plainPassword, role } = initialUser;

    const { id: roleId = null } = await userRoles.findByMid(role, {
        attributes: ['id']
    });

    const password = await bcrypt.hash(plainPassword, 10);

    return [
        { email, firstName, lastName, password, roleId }
    ];
}

const match = d => ({ email }) => (email === d.email);

module.exports = async () => addToDatabase(buildDefaultUsers, users, match);
