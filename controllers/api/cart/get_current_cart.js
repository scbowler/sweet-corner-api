module.exports = async (req, res) => {
    const { cart } = req;
    
    let formattedCart = {
        cart: null,
        message: 'No active cart'
    }

    if(cart){
        const items = await cart.getItems(req);
        const total = await cart.getTotals();

        formattedCart = {
            cart: {
                items,
                pid: cart.pid,
                total
            }
        }
    }

    res.send(formattedCart);
}
