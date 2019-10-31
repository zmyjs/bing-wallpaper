const bing = require('./utils/bing');
const acaHeaders = require('./utils/acaHeaders');

exports.handler = function (event, context, callback) {
    bing(event.queryStringParameters).then(function (res) {
        send(null, 200, res);
    }, function (error) {
        send(error, error.statusCode || 500, error);
    });

    function send(error, statusCode, data) {
        callback(error, {
            statusCode,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                ...acaHeaders
            }
        });
    }
}