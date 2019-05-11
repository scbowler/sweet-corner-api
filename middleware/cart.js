exports.withCart = (req, res, next) => {
    const { cookies: {sc_cart_pid = null}, user } = req;

    if(user){
        console.log('Found user, check if user has cart');

        req.cart = 'User cart';

        return next();
    }

    if(sc_cart_pid){
        console.log('Found cart pid in cookie');

        req.cart = 'Cookie PID cart';

        return next();
    }

    req.cart = null;

    return next();
}