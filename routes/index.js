const { notFound } = require(__basedir + '/controllers/errors');

module.exports = app => {
    app.use('/api', require('./api'));
    app.use('/auth', require('./auth'));
    app.use('/images', require('./images'));

    app.all('*', notFound);
}
