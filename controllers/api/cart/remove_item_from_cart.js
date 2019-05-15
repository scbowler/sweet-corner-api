const { cartItems, products } = require(__basedir + '/db/models');
const validation = require(__basedir + '/helpers/validation');
const { StatusError } = require(__basedir + '/helpers/error_handling');

module.exports = async (req, res, next) => {
    const { cart, params: { productId } } = req;
    
    try {
        if (!validation.pid(productId)) {
            throw new StatusError(422, 'Invalid product ID format');
        }

        const product = await products.findByPid(productId, {
            attributes: ['id']
        });

        if(!product){
            throw new StatusError(422, `No product found with ID of: ${productId}`);
        }

        const item = await cartItems.findOne({
            where: {
                cartId: cart.id,
                productId: product.id
            }
        });

        if(!item){
            throw new StatusError(404, `No product with ID: ${productId}, in cart`);
        }

        await item.destroy();

        const total = await cart.getTotals();

        res.send({
            cartId: cart.pid,
            message: `Deleted item (${productId}) from cart`,
            total
        });
    } catch(err){
        err.default = `Error deleting item (${productId}) from cart`;

        next(err);
    }
}
