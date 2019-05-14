const router = require('express').Router();
const { notFound } = require(__basedir + '/controllers/errors');
const { getByPid, getByName } = require(__basedir + '/controllers/images');

router.get('/:type/:file', getByName);

router.get('/:pid', getByPid);

router.all('*', notFound);

module.exports = router;
