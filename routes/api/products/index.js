const router = require('express').Router();
const { notFound } = require(__basedir + '/controllers/errors');
const { getAll } = require(__basedir + '/controllers/api/products');

/*
    /api/products routes
*/

router.get('/', getAll);

router.all('*', notFound);

module.exports = router;
