const router = require('express').Router();

router.get('/test', (req, res) => {
    res.send({
        success: true,
        message: 'Sweet Corner AUTH API test working'
    });
});

module.exports = router;