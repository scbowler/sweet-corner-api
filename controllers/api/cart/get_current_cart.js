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
                id: cart.pid,
                items,
                total
            }
        }
    }

    res.send(formattedCart);
}
