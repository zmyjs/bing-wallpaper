const acaHeaders = require('../utils/acaHeaders');

exports.handler = function (event, context, callback) {
    callback(null, {
        statusCode,
        body: 'test',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            ...acaHeaders
        }
    });
}