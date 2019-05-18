const { orderItems, orders } = require(__basedir + '/db/models');
const { StatusError } = require(__basedir + '/helpers/error_handling');
const validation = require(__basedir + '/helpers/validation');
const { imageUrls } = require(__basedir + '/helpers');

module.exports = async (req, res, next) => {
    try {
        const { guest, params: { orderId }, user } = req;

        if(!validation.pid(orderId)){
            throw new StatusError(422, 'Invalid order ID format');
        }

        const options = {
            attributes: ['id', 'itemCount', 'pid', 'total', 'createdAt'],
            include: {
                association: 'status',
                attributes: ['name']
            },
            where: {
                pid: orderId
            }
        }

        if(user) {
            options.where.userId = user.id;
        } else {
            options.where.guestId = guest.id
        }

        const order = await orders.findOne(options);

        if(!order){
            throw new StatusError(406, `No order found with an ID of: ${orderId}`);
        }

        const items = await orderItems.findAllByOid(order.id, {
            attributes: ['each', 'pid', 'quantity'],
            include: {
                association: 'product',
                attributes: ['name', 'pid'],
                include: {
                    association: 'thumbnail',
                    attributes: ['altText', 'file', 'type']
                }
            }
        });

        let formattedItems = [];

        if(items.length){
            formattedItems = items.map(({ dataValues: {product: {name, pid, thumbnail}, pid: id, ...item}}) => ({
                ...item.dataValues,
                id,
                product: {
                    name,
                    id: pid,
                    thumbnail: {
                        altText: thumbnail.altText,
                        url: imageUrls(req, thumbnail)
                    }
                }
            }));
        }

        const {id, pid, status, ...formattedOrder} = order.dataValues;

        res.send({
            ...formattedOrder,
            id: pid,
            status: status.name,
            items: formattedItems
        });
    } catch(err){
        err.default = 'Error getting order details';

        next(err);
    }
}

