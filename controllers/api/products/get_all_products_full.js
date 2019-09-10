const Sequelize = require('sequelize');
const { allergies, nutrition, products } = require(__basedir + '/db/models');
const { imageUrls } = require(__basedir + '/helpers');

module.exports = async (req, res, next) => {
    try {
        const allProducts = await products.findAll({
            attributes: ['calories', 'caption', 'cost', 'name', 'pid'],
            include: [
                {
                    association: 'thumbnail',
                    attributes: ['altText', 'file', 'pid', 'type']
                },
                {
                    attributes: ['dairy', 'gluten', 'nuts'],
                    model: allergies,
                    where: { productId: Sequelize.col('products.id') }
                },
                {
                    attributes: ['carbs', 'fat', 'sugar'],
                    model: nutrition,
                    where: { productId: Sequelize.col('products.id') }
                }
            ]
        });

        let formattedProducts = [];

        if (allProducts) {
            formattedProducts = allProducts.map(p => {
                const { pid, ...product } = p.dataValues;

                const { pid: thumbnailPid, ...thumbnail } = p.thumbnail.dataValues

                thumbnail.url = imageUrls(req, p.thumbnail);

                return {
                    id: pid,
                    ...product,
                    thumbnail: {
                        id: thumbnailPid,
                        ...thumbnail
                    }
                };
            });
        }

        res.send({
            products: formattedProducts || []
        });
    } catch (err) {
        err.default = 'Error fetching full product list';
        next(err);
    }
}
