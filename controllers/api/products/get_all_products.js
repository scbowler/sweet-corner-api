const { products } = require(__basedir + '/db/models');
const { imageUrls } = require(__basedir + '/helpers');

module.exports = async (req, res, next) => {
    try {
        const allProducts = await products.findAll({
            attributes: ['caption', 'cost', 'name', 'pid'],
            include: {
                association: 'thumbnail',
                attributes: ['altText', 'file', 'pid', 'type']
            }
        });

        if(allProducts){
            allProducts.map(p => {
                const product = p.dataValues;

                product.thumbnail = p.thumbnail.dataValues

                product.thumbnail.url = imageUrls(req, p.thumbnail);

                return product;
            });
        }

        res.send({
            products: allProducts || []
        });
    } catch(err){
        err.default = 'Error fetching product list';
        next(err);
    }
}
