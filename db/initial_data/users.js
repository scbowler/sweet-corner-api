const { users } = require('../models');
const { addToDatabase } = require(__basedir + '/helpers');

const defaultUsers = [
    {
        email: 'test@mail.com',
        firstName: 'Jim',
        lastName: 'Smith',
        password: 'asdf',
        roleId: 1
    }
];

const match = d => ({ email }) => (email === d.email);

module.exports = async () => addToDatabase(defaultUsers, users, match);

// addInitialUserRoles(defaultRoles);

// async function addInitialUserRoles(defaults) {
//     const roles = await userRoles.findAll();

//     const needToAdd = defaults.filter(d => (
//         roles.length
//             ? roles.findIndex(({ mid }) => (mid === d.mid)) === -1
//             : true
//     ));

//     if (needToAdd.length) {
//         userRoles.bulkCreate(needToAdd);
//     }
// }