const router = require('express').Router();
const { notFound } = require(__basedir + '/controllers/errors');
const { getAllFull, getAll, getOne } = require(__basedir + '/controllers/api/products');

/*
    /api/products routes
*/

router.get('/', getAll);

router.get('/full', getAllFull);

router.get('/:product_id', getOne);

router.all('*', notFound);

module.exports = router;
