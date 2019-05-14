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
                    attributes: ['quantity', 'createdAt'],
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

                return items.map(({product: { cost: each, name, pid, thumbnail }, quantity, createdAt: added}) => ({
                    added,
                    each,
                    name,
                    productId: pid,
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

                return items.reduce((pv, { product, quantity }) => ({
                    total: pv.total + (product.cost * quantity),
                    items: pv.items + quantity
                }), {total: 0, items: 0});
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
