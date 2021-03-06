const Sequelize = require('sequelize');
const { imageUrls } = require(__basedir + '/helpers');
const { findByPid, findByUid } = require('./interfaces');
const { Model } = Sequelize;

module.exports = (sequelize, cartStatuses, users) => {
    class Cart extends Model {
        static findByPid(){
            return findByPid.apply(this, arguments);
        }
        static findByUid(){
            return findByUid.apply(this, arguments);
        }
        static async findActiveById(id, options = {}) {
            const { id: statusId = null } = await cartStatuses.findByMid('active') || {};

            if (!statusId) return null;

            return this.findOne({
                ...options,
                order: [['lastInteraction', 'DESC']],
                where: { id, statusId, userId: null }
            });
        }
        static async findActiveByPid(pid, options = {}) {
            const { id: statusId = null } = await cartStatuses.findByMid('active') || {};

            if(!statusId) return null;

            return this.findOne({
                ...options,
                order: [['lastInteraction', 'DESC']],
                where: { pid, statusId, userId: null }
            });
        }
        static async findActiveByUid(userId, options = {}){
            const { id: statusId = null } = await cartStatuses.findByMid('active') || {};

            if (!statusId) return null;

            return this.findOne({
                ...options,
                where: { statusId, userId },
                order: [['lastInteraction', 'DESC']]
            });
        }

        cartUsed(){
            this.lastInteraction = new Date();

            return this.save();
        }

        getItems(cartItems){
            return async (req, internal = false) => {
                const items = await cartItems.findAll({
                    attributes: ['createdAt', 'id', 'pid', 'quantity'],
                    where: { cartId: this.id },
                    include: {
                        association: 'product',
                        attributes: ['cost', 'id', 'name', 'pid',],
                        include: {
                            association: 'thumbnail',
                            attributes: [ 'altText', 'file', 'type']
                        }
                    }
                });

                return items.map(({product: { cost: each, id: productId, name, pid: productPid, thumbnail },id: itemId, pid: itemPid, quantity, createdAt: added}) => ({
                    added,
                    each,
                    itemId: internal ? itemId: itemPid,
                    name,
                    productId: internal ? productId : productPid,
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
        lastInteraction: {
            allowNull: true,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
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
