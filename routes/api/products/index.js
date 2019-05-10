const router = require('express').Router();
const { getAll } = require(__basedir + '/controllers/api/products');

/*
    /api/products routes
*/

router.get('/', getAll);

module.exports = router;
