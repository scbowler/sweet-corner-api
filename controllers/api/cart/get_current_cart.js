module.exports = (req, res) => {
    const { cart } = req;
    
    res.send({ cart });
}
