
module.exports = app => {
    app.use('/api', require('./api'));
    app.use('/auth', require('./auth'));
    app.use('/images', require('./images'));
}
