const Sequelize = require('sequelize');
const { imageUrls } = require(__basedir + '/helpers');
const { findActiveByUid, findByPid, findByUid } = require('./interfaces');
const { Model } = Sequelize;

module.exports = (sequelize, cartStatuses, users) => {
    class Cart extends Model {
        static findByPid(){
            return findByPid.apply(this, arguments);
        }
        static findByUid(){
            return findByUid.apply(this, arguments);
        };
        static findActiveByUid(){
            return findActiveByUid(cartStatuses).apply(this, arguments);
        }

        getItems(cartItems){
            return async (req) => {
                const items = await cartItems.findAll({
                    attributes: ['createdAt', 'pid', 'quantity'],
                    where: { cartId: this.id },
                    include: {
                        association: 'product',
                        attributes: ['cost', 'name', 'pid',],
                        include: {
                            association: 'thumbnail',
                            attributes: [ 'altText', 'file', 'type']
                        }
                    }
                });

                return items.map(({product: { cost: each, name, pid: productId, thumbnail }, pid: id, quantity, createdAt: added}) => ({
                    added,
                    each,
                    id,
                    name,
                    productId,
                    quantity,
                    thumbnail: {
                        altText: thumbnail.altText,
                        url: imageUrls(req, thumbnail)
                    },
                    total: each * quantity,
                }));
            }
        }

        getTotals(cartItems){
            return async () => {
                const items = await cartItems.findAll({
                    where: { cartId: this.id },
                    include: {
                        association: 'product',
                        attributes: ['cost']
                    }
                });

                return items.reduce((total, { product, quantity }) => ({
                    cost: total.cost + (product.cost * quantity),
                    items: total.items + quantity
                }), {cost: 0, items: 0});
            }
        }
    };

    Cart.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        pid: {
            allowNull: false,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        }
    },
    {
        sequelize,
        modelName: 'cart',
        paranoid: true
    });

    Cart.belongsTo(users, {as: 'user'});
    Cart.belongsTo(cartStatuses, {as: 'status', allowNull: false});

    return Cart;
}
