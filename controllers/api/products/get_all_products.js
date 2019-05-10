const { products } = require(__basedir + '/db/models');
const { sendError } = require(__basedir + '/helpers/error_handling');

module.exports = async (req, res) => {
    try {
        const allProducts = await products.findAll({
            attributes: ['caption', 'cost', 'name', 'pid'],
            include: {
                association: 'thumbnail',
                attributes: ['altText', 'file', 'pid', 'type']
            }
        });

        res.send({
            products: allProducts || []
        });
    } catch(err){
        sendError(res, err, 'Error fetching product list');
    }
}
