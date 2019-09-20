const Sequelize = require('sequelize');
const { allergies, nutrition, products } = require(__basedir + '/db/models');
const { imageUrls } = require(__basedir + '/helpers');
const validation = require(__basedir + '/helpers/validation');
const { StatusError } = require(__basedir + '/helpers/error_handling');

module.exports = async (req, res, next) => {
    const { product_id } = req.params;
    
    try {
        if(!validation.pid(product_id)){
            throw new StatusError(422, 'Invalid product ID received');
        }

        const product = await products.findByPid(product_id, {
            attributes: ['caption', 'cost', 'description', 'name', 'pid'],
            include: [
                {
                    association: 'image',
                    attributes: ['altText', 'file', 'pid', 'type']
                },
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

        if(!product){
            throw new StatusError(404, `No product found with an ID of ${product_id}`);
        }

        const { pid, ...formattedProduct } = product.dataValues;
        const { pid: imagePid, ...image } = product.image.dataValues;
        const { pid: thumbnailPid, ...thumbnail } = product.thumbnail.dataValues;

        res.send({
            id: pid,
            ...formattedProduct,
            image: {
                id: imagePid,
                ...image,
                url: imageUrls(req, image)
            },
            thumbnail: {
                id: thumbnailPid,
                ...thumbnail,
                url: imageUrls(req, thumbnail)
            }
        });
    } catch(err){
        err.default = `Error retrieving product with id of: ${product_id}`;
        next(err);
    }
}
