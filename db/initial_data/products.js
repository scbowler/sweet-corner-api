const { products } = require('../models');
const { addToDatabase } = require(__basedir + '/helpers');

const defaultProducts = [
    {
        caption: 'Delicious Strawberry Cupcake',
        cost: 350,
        description: 'These strawberry delights will satisfy both your sweet tooth and those strawberry cravings.',
        name: 'Strawberry Delight',
        createdById: 1,
        imageId: 1,
        thumbnailId: 2
    },
    {
        caption: 'Sweet Berry Cupcake',
        cost: 200,
        description: 'This is the berry cupcake of your dreams, they may be small but pack huge flavor.',
        name: 'Purple Dream',
        createdById: 1,
        imageId: 3,
        thumbnailId: 4
    },
    {
        caption: 'Mini Strawberry Cupcake',
        cost: 225,
        description: 'These are a miniature version of our famous Strawberry Delight cupcakes, all the flavor, half the guilt.',
        name: 'Mini Berry',
        createdById: 1,
        imageId: 5,
        thumbnailId: 6
    },
    {
        caption: 'Unicorn Tear Sparkling Cupcake',
        cost: 650,
        description: 'What do unicorn tears taste like? We don\'t know, but we do know these cupcakes taste better!',
        name: 'Unicorn Tear',
        createdById: 1,
        imageId: 7,
        thumbnailId: 8
    },
    {
        caption: 'Red and Yellow Rose Vanilla Cupcake',
        cost: 575,
        description: 'Delightful vanilla cupcakes with rose frosting piled high on top.',
        name: 'Pearl Rose',
        createdById: 1,
        imageId: 9,
        thumbnailId: 10
    },
    {
        caption: 'Silky Red Cupcake Loaded with Frosting',
        cost: 350,
        description: 'A vanilla cupcake with strawberry silk frosting eloquently piled high with a peach topping.',
        name: 'Red Silk',
        createdById: 1,
        imageId: 11,
        thumbnailId: 12
    },
    {
        caption: 'Vanilla Cupcake Piled with Vanilla Frosting',
        cost: 600,
        description: 'Not just another vanilla cupcake. Our Vanilla Stack Cake cupcake is stacked with three scoops of vanilla frosting and topped with drizzled vanilla and a delicious cherry.',
        name: 'Vanilla Stack Cake',
        createdById: 1,
        imageId: 13,
        thumbnailId: 14
    },
    {
        caption: 'Blueberry Cupcake Piled High with Toppings',
        cost: 775,
        description: 'A large blueberry cupcake topped with blueberry frosting, chocolate syrup, whip cream, and a sweet cherry. Looks and taste like your favorite blueberry malt.',
        name: 'Blueberry Malt Cake',
        createdById: 1,
        imageId: 15,
        thumbnailId: 16
    },
    {
        caption: 'Lemon Cupcake with Piled High Lemon Frosting',
        cost: 450,
        description: 'Lemon, lemon, and more lemon! Love lemon? So do we and our Double Lemon cupcake proves it!',
        name: 'Double Lemon',
        createdById: 1,
        imageId: 17,
        thumbnailId: 18
    }
];

const match = d => ({ name }) => (name === d.name);

module.exports = async () => addToDatabase(defaultProducts, products, match);
