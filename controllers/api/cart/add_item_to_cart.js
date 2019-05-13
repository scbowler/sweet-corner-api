module.exports = (req, res) => {
    const { body: { quantity = 1 }, cart, params: { productId }, user } = req;

    console.log('user:', user);
    console.log('Cart:', cart);

    res.send({ quantity, productId });
}
