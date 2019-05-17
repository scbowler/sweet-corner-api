const { Op } = require('sequelize');
const { cartItems } = require(__basedir + '/db/models');

module.exports = async (req, res, next) => {
    const { cart } = req;

    try {
        const output = {
            message: `Cart deleted`,
            deletedId: cart && cart.pid
        }

        if(!cart){
            output.message = 'No currently active cart to delete';
        } else {
            const itemsToDelete = await cartItems.findAll({
                attributes: ['id'],
                where: {
                    cartId: cart.id
                }
            });

            if (itemsToDelete) {
                const itemIds = itemsToDelete.map(({ id }) => id);

                await cartItems.destroy({
                    where: {
                        id: {
                            [Op.or]: itemIds
                        }
                    }
                });
            }

            await cart.destroy();
        }

        res.send(output);
    } catch (err) {
        err.default = `Error deleting currently active cart`;

        next(err);
    }
}
