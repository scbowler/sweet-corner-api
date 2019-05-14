const { formatError } = require(__basedir + '/helpers/error_handling');

module.exports = (err, req, res, next) => {
    const error = {
        errors: formatError(err, 'An error occurred'),
        message: `Bad ${req.method} Request`,
        success: false
    };
    const status = err.status || 500;

    res.status(status).send(error);
}
