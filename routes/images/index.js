const router = require('express').Router();
const fs = require('fs');
const { getByPid, getByName } = require(__basedir + '/controllers/images');

router.get('/:type/:file', getByName);

router.get('/:pid', getByPid);

module.exports = router;
