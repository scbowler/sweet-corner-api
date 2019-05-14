const { formatError } = require(__basedir + '/helpers/error_handling');

module.exports = (err, req, res, next) => {
    const error = {
        message: `Bad ${req.method} Request`,
        success: false,
        errors: formatError(err, 'An error occurred')
    };
    const status = err.status || 500;

    res.status(status).send(error);
}
