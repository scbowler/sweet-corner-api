const { allergies  } = require('../models');
const { addToDatabase } = require(__basedir + '/helpers');

const defaultAllergies = [
    {
        dairy: true,
        gluten: true,
        nuts: false,
        productId: 1
    },
    {
        dairy: false,
        gluten: true,
        nuts: true,
        productId: 2
    },
    {
        dairy: false,
        gluten: true,
        nuts: true,
        productId: 3
    },
    {
        dairy: false,
        gluten: false,
        nuts: false,
        productId: 4
    },
    {
        dairy: true,
        gluten: true,
        nuts: true,
        productId: 5
    },
    {
        dairy: true,
        gluten: false,
        nuts: true,
        productId: 6
    },
    {
        dairy: true,
        gluten: true,
        nuts: false,
        productId: 7
    },
    {
        dairy: true,
        gluten: false,
        nuts: true,
        productId: 8
    },
    {
        dairy: false,
        gluten: false,
        nuts: false,
        productId: 9
    }
];

const match = d => ({ productId }) => (productId === d.productId);

module.exports = async () => addToDatabase(defaultAllergies, allergies, match);
