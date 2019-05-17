const Sequelize = require('sequelize');
const { findByPid } = require('./interfaces');
const { imageUrls } = require(__basedir + '/helpers');
const { Model } = Sequelize;

module.exports = (sequelize, cart, product) => {
    class CartItem extends Model {
        static findByPid(){
            return findByPid.apply(this, arguments);
        }
        static async findByPkFormatted(id, req){
            const { createdAt, pid, quantity, product } = await this.findByPk(id, {
                attributes: ['createdAt', 'pid', 'quantity'],
                include: {
                    association: 'product',
                    attributes: ['cost', 'name', 'pid',],
                    include: {
                        association: 'thumbnail',
                        attributes: ['altText', 'file', 'type']
                    }
                }
            }) || {};

            if(!pid) return null;

            const { cost, name, pid: productId, thumbnail: { altText, ...image } } = product

            return {
                added: createdAt,
                each: cost,
                itemId: pid,
                name: name,
                productId,
                quantity,
                thumbnail: {
                    altText,
                    url: imageUrls(req, image)
                },
                total: cost * quantity
            }
        }
    };
    
    CartItem.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER.UNSIGNED
        },
        pid: {
            allowNull: false,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        quantity: {
            allowNull: false,
            type: Sequelize.INTEGER.UNSIGNED
        }
    },
    {
        sequelize,
        modelName: 'cartItem',
        paranoid: true
    });

    CartItem.belongsTo(cart, { as: 'cart', allowNull: false });
    CartItem.belongsTo(product, { as: 'product', allowNull: false });

    return CartItem;
}
