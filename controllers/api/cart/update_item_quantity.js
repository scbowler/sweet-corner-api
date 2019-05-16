const { cartItems } = require(__basedir + '/db/models');
const validation = require(__basedir + '/helpers/validation');
const { StatusError } = require(__basedir + '/helpers/error_handling');

module.exports = async (req, res, next) => {
    const { body: { quantity = 1 }, cart, method, params: { itemId } } = req;

    try {
        if(!cart){
            throw new StatusError(406, 'No active cart to update');
        }

        if(!validation.pid(itemId)){
            throw new StatusError(422, 'Invalid item ID format');
        }

        const item = await cartItems.findOne({
            attributes: ['id', 'quantity'],
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
            throw new StatusError(406, `Item with ID of: ${itemId} not in current active cart`);
        }

        let message = '';

        if(method === 'PUT'){
            item.quantity = quantity;

            message = `Set ${item.product.name} cupcakes quantity to ${quantity}`;
        } else {
            item.quantity += parseInt(quantity);

            const addRemove = quantity > 0 ? 'Added' : 'Removed';
            const toFrom = quantity > 0 ? 'to' : 'from';
            message = `${addRemove} ${Math.abs(quantity)} ${item.product.name} cupcake${quantity > 1 || quantity < -1 ? 's' : ''} ${toFrom} cart`;
        }

        

        if(item.quantity > 0){
            await item.save();
        } else {
            message = `Removed all ${item.product.name} cupcake${quantity > 1 || quantity < -1 ? 's' : ''} from cart`;
            await item.destroy();
        }

        const total = await cart.getTotals();

        res.send({
            cartId: cart.pid,
            itemId,
            message,
            total
        });
    } catch(err){
        err.default = `Error updating quantity of item: ${itemId}`;

        next(err);
    }
}
