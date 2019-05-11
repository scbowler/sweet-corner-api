const { products } = require(__basedir + '/db/models');
const { sendError } = require(__basedir + '/helpers/error_handling');

module.exports = async (req, res) => {
    try {
        let allProducts = await products.findAll({
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
        sendError(res, err, 'Error fetching product list');
    }
}

function imageUrls(req, {file, type}){
    return `${req.protocol}://${req.get('host')}/images/${type}/${file}`;
}
