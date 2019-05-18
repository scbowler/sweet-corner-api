const { orders } = require(__basedir + '/db/models');

module.exports = async (req, res, next) => {
    try {
        const { user } = req;

        const userOrders = await orders.findAll({
            attributes: ['itemCount', 'pid', 'total', 'createdAt'],
            include: {
                association: 'status',
                attributes: ['name']
            },
            where: { userId: user.id }
        });

        let formattedOrders = [];

        if(userOrders.length){
            formattedOrders = userOrders.map(({ dataValues: {status, pid: id, ...order }}) => ({
                ...order,
                id,
                status: status.name
            }));
        }

        res.send({
            orders: formattedOrders
        });
    } catch(err){
        err.default = 'Error getting your order history';

        next(err);
    }
}
