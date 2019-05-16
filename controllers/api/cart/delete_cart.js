const { Op } = require('sequelize');
const { carts, cartItems } = require(__basedir + '/db/models');
const validation = require(__basedir + '/helpers/validation');
const { StatusError } = require(__basedir + '/helpers/error_handling');

module.exports = async (req, res, next) => {
    const { cart, cookies: { sc_cart_pid }, params: { cartId }, user } = req;

    try {
        if(!validation.pid(cartId)){
            throw new StatusError('Invalid cart ID format');
        }

        let cartToDelete = null;

        if(cart && cart.pid === cartId){
            cartToDelete = cart;
        } else {
            cartToDelete = await carts.findOne({
                where: {
                    pid: cartId,
                    userId: {
                        [Op.or]: [null, user && user.id]
                    }
                }
            });
        }

        if(!cartToDelete){
            throw new StatusError(401, `Not authorized to delete cart with ID of: ${cartId}`);
        }

        if (sc_cart_pid === cartToDelete.pid){
            res.clearCookie('sc_cart_pid');
        }
        
        const itemsToDelete = await cartItems.findAll({
            attributes: ['id'],
            where: {
                cartId: cartToDelete.id
            }
        });

        if(itemsToDelete){
            const itemIds = itemsToDelete.map(({ id }) => id);

            await cartItems.destroy({
                where: {
                    id: {
                        [Op.or]: itemIds
                    }
                }
            });
        }
        
        await cartToDelete.destroy();
    
        res.send({
            message: `Cart (${cartId}) deleted`
        });
    } catch(err){
        err.default = `Error deleting cart with ID of: ${cartId}`;

        next(err);
    }
}
