const { products } = require(__basedir + '/db/models');
const { imageUrls } = require(__basedir + '/helpers');

module.exports = async (req, res, next) => {
    try {
        const allProducts = await products.findAll({
            attributes: ['caption', 'cost', 'name', 'pid'],
            include: {
                association: 'thumbnail',
                attributes: ['altText', 'file', 'pid', 'type']
            }
        });

        let formattedProducts = [];

        if(allProducts){
            formattedProducts = allProducts.map(p => {
                const {pid, ...product} = p.dataValues;

                const { pid: thumbnailPid, ...thumbnail } = p.thumbnail.dataValues

                thumbnail.url = imageUrls(req, p.thumbnail);

                return {
                    id: pid,
                    ...product,
                    thumbnail: {
                        id: thumbnailPid,
                        ...thumbnail
                    }
                };
            });
        }

        res.send({
            products: formattedProducts || []
        });
    } catch(err){
        err.default = 'Error fetching product list';
        next(err);
    }
}
