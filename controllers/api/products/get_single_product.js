const { products } = require(__basedir + '/db/models');
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
                }
            ]
        });

        if(!product){
            throw new StatusError(404, `No product found with an ID of ${product_id}`);
        }

        res.send({ product });
    } catch(err){
        err.default = `Error retrieving product with id of: ${product_id}`;
        next(err);
    }
}
