class StatusError extends Error {
    constructor(status = 500, messages = [], forClient = true, ...params) {
        super(...params);

        if(!Array.isArray(messages)){
            if (!typeof messages === 'string') {
                throw new Error('StatusError second argument must be an array or a string only');
            }

            messages = [ messages ];
        }

        this.forClient = forClient;
        this.messages = messages;
        this.status = status;
    }
}

function formatError(err, defaultErrorMessage) {
    let formattedErrors = [defaultErrorMessage];

    if (err instanceof StatusError && err.forClient && err.messages.length) {
        formattedErrors = err.messages
    }

    return formattedErrors;
}

exports.formatError = formatError;
exports.StatusError = StatusError;

module.exports = exports;
