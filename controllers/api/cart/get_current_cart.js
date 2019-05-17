module.exports = async (req, res) => {
    const { cart } = req;
    
    let formattedCart = {
        cartId: null,
        message: 'No active cart'
    }

    if(cart){
        const items = await cart.getItems(req);
        const total = await cart.getTotals();

        formattedCart = {
            cartId: cart.pid,
            items,
            total
        }
    }

    res.send(formattedCart);
}
