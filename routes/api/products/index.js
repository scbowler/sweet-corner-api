const router = require('express').Router();
const { notFound } = require(__basedir + '/controllers/errors');
const { getAll, getOne } = require(__basedir + '/controllers/api/products');

/*
    /api/products routes
*/

router.get('/', getAll);

router.get('/:product_id', getOne);

router.all('*', notFound);

module.exports = router;
