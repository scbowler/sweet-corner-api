const { nutrition } = require('../models');
const { addToDatabase } = require(__basedir + '/helpers');

const defaultNutrition = [
    {
        carbs: 200,
        fat: 100,
        productId: 1,
        sugar: 130
    },
    {
        carbs: 220,
        fat: 200,
        productId: 2,
        sugar: 150
    },
    {
        carbs: 140,
        fat: 130,
        productId: 3,
        sugar: 230
    },
    {
        carbs: 445,
        fat: 330,
        productId: 4,
        sugar: 123
    },
    {
        carbs: 245,
        fat: 100,
        productId: 5,
        sugar: 432
    },
    {
        carbs: 654,
        fat: 111,
        productId: 6,
        sugar: 321
    },
    {
        carbs: 412,
        fat: 156,
        productId: 7,
        sugar: 380
    },
    {
        carbs: 284,
        fat: 154,
        productId: 8,
        sugar: 168
    },
    {
        carbs: 180,
        fat: 75,
        productId: 9,
        sugar: 142
    }
];

const match = d => ({ productId }) => (productId === d.productId);

module.exports = async () => addToDatabase(defaultNutrition, nutrition, match);
