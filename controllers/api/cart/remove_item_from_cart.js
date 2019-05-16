const { cartItems } = require(__basedir + '/db/models');
const validation = require(__basedir + '/helpers/validation');
const { StatusError } = require(__basedir + '/helpers/error_handling');

module.exports = async (req, res, next) => {
    const { cart, params: { itemId } } = req;
    
    try {
        if(!cart){
            throw new StatusError(406, 'No active cart to delete item from')
        }

        if (!validation.pid(itemId)) {
            throw new StatusError(422, 'Invalid item ID format');
        }

        const item = await cartItems.findOne({
            attributes: ['id', 'cartId'],
            include: {
                association: 'product',
                attributes: ['name']
            },
            where: {
                pid: itemId,
                cartId: cart.id
            }
        });

        if(!item){
            throw new StatusError(406, `Item (${itemId}) is not in your current active cart`);
        }

        const productName = item.product.name;

        await item.destroy();

        const total = await cart.getTotals();

        res.send({
            cartId: cart.pid,
            message: `Removed all ${productName} items from cart`,
            total
        });
    } catch(err){
        err.default = `Error deleting item (${itemId}) from cart`;

        next(err);
    }
}
