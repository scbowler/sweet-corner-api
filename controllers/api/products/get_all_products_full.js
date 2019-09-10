
module.exports = async (req, res, next) => {
    try {
        res.send('Testing full products response');
    } catch(err) {
        next(err);
    }
} 
