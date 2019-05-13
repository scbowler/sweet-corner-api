const router = require('express').Router();
const { getAll, getOne } = require(__basedir + '/controllers/api/products');

/*
    /api/products routes
*/

router.get('/', getAll);

router.get('/:product_id', getOne);

module.exports = router;
