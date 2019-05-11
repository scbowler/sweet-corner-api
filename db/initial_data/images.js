const { images } = require('../models');
const { addToDatabase } = require(__basedir + '/helpers');

const defaultImages = [
    {
        altText: 'Strawberry cupcake',
        name: 'Strawberry Delight',
        file: 'cupcake_sq_1.jpg',
        type: 'full_images',
        createdById: 1
    },
    {
        altText: 'Strawberry cupcake',
        name: 'Strawberry Delight',
        file: 'cupcake_sq_1.jpg',
        type: 'thumbnails',
        createdById: 1
    },
    {
        altText: 'Berry cupcake',
        name: 'Purple Dream',
        file: 'cupcake_sq_2.jpg',
        type: 'full_images',
        createdById: 1
    },
    {
        altText: 'Berry cupcake',
        name: 'Purple Dream',
        file: 'cupcake_sq_2.jpg',
        type: 'thumbnails',
        createdById: 1
    },
    {
        altText: 'Mini strawberry cupcake',
        name: 'Mini Berry',
        file: 'cupcake_sq_3.jpg',
        type: 'full_images',
        createdById: 1
    },
    {
        altText: 'Mini strawberry cupcake',
        name: 'Mini Berry',
        file: 'cupcake_sq_3.jpg',
        type: 'thumbnails',
        createdById: 1
    },
    {
        altText: 'Unicorn tear sparkling cupcake',
        name: 'Unicorn Tear',
        file: 'cupcake_sq_4.jpg',
        type: 'full_images',
        createdById: 1
    },
    {
        altText: 'Unicorn tear sparkling cupcake',
        name: 'Unicorn Tear',
        file: 'cupcake_sq_4.jpg',
        type: 'thumbnails',
        createdById: 1
    },
    {
        altText: 'Red and yellow vanilla cupcake',
        name: 'Pearl Rose',
        file: 'cupcake_sq_5.jpg',
        type: 'full_images',
        createdById: 1
    },
    {
        altText: 'Red and yellow vanilla cupcake',
        name: 'Pearl Rose',
        file: 'cupcake_sq_5.jpg',
        type: 'thumbnails',
        createdById: 1
    },
    {
        altText: 'Silky red cupcake loaded with frosting',
        name: 'Red Silk',
        file: 'cupcake_sq_6.jpg',
        type: 'full_images',
        createdById: 1
    },
    {
        altText: 'Silky red cupcake loaded with frosting',
        name: 'Red Silk',
        file: 'cupcake_sq_6.jpg',
        type: 'thumbnails',
        createdById: 1
    },
    {
        altText: 'Vanilla cupcake with vanilla frosting',
        name: 'Vanilla Stack Cake',
        file: 'cupcake_sq_7.jpg',
        type: 'full_images',
        createdById: 1
    },
    {
        altText: 'Vanilla cupcake with vanilla frosting',
        name: 'Vanilla Stack Cake',
        file: 'cupcake_sq_7.jpg',
        type: 'thumbnails',
        createdById: 1
    },
    {
        altText: 'Blueberry cupcake piled high with toppings',
        name: 'Blueberry Malt Cake',
        file: 'cupcake_sq_8.jpg',
        type: 'full_images',
        createdById: 1
    },
    {
        altText: 'Blueberry cupcake piled high with toppings',
        name: 'Blueberry Malt Cake',
        file: 'cupcake_sq_8.jpg',
        type: 'thumbnails',
        createdById: 1
    },
    {
        altText: 'Lemon cupcake with piled high lemon frosting',
        name: 'Double Lemon',
        file: 'cupcake_sq_9.jpg',
        type: 'full_images',
        createdById: 1
    },
    {
        altText: 'Lemon cupcake with piled high lemon frosting',
        name: 'Double Lemon',
        file: 'cupcake_sq_9.jpg',
        type: 'thumbnails',
        createdById: 1
    }
];

const match = d => ({file, type}) => ( file + type === d.file + d.type);

module.exports = async () => addToDatabase(defaultImages, images, match);
