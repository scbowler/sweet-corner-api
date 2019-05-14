const { StatusError } = require('../../helpers/error_handling');

module.exports = (req, res, next) => {
    try {
        throw new StatusError(418, ['Test 1', 'Test 2', 'Test 3']);
        // throw new Error('This is a standard error');
    } catch(err){
        // err.default = 'This is a default error message';

        next(err);
    }
}
