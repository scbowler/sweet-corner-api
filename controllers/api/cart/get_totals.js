module.exports = async (req, res, next) => {
    try {
        const { cart } = req;

        let total = null;

        if(cart){
            total = await cart.getTotals();
        }
        
        res.send({ total });
    } catch (err) {
        err.default = 'Error getting cart totals';

        next(err);
    }
}
