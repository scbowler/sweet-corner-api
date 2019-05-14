const { carts, cartItems } = require(__basedir + '/db/models');

exports.withCart = async (req, res, next) => {
    const { cookies: {sc_cart_pid = null}, user } = req;

    req.cart = null;

    if(user){
        req.cart = await carts.findActiveByUid(user.id);
    } else if(sc_cart_pid){
        req.cart = await carts.findByPid(sc_cart_pid);
    }

    if(req.cart){
        req.cart.getTotals = req.cart.getTotals(cartItems);
        req.cart.getItems = req.cart.getItems(cartItems);

        const totals = await req.cart.getTotals();
        const items = await req.cart.getItems(req);

        console.log('Cart Totals:', totals);
        console.log('Cart Items:', items);
    }
    

    

    return next();
}
