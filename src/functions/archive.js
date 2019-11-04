const bing = require('../utils/bing');

exports.handler = function (event, context, callback) {
    bing(event.queryStringParameters).then(function (res) {
        let body = res.data;

        if (res.url.searchParams.get('format') === 'js') {
            const data = JSON.parse(res.data);
            data.base = res.url.origin;
            body = JSON.stringify(data);
        }

        callback(null, {
            statusCode: res.statusCode,
            headers: res.headers,
            body
        });
    }, function (error) {
        if (error.statusCode) {
            callback(null, {
                statusCode: error.statusCode,
                headers: error.headers,
                body: error.data
            });
        } else {
            callback(error);
        }
    });
}