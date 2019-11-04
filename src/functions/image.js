const bing = require('../utils/bing');

const acaHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'authorization'
};

exports.handler = function (event, context, callback) {
    console.log(process.version);

    bing(event.queryStringParameters).then(function (res) {
        callback(null, {
            statusCode: 200,
            body: res.data,
            headers: {
                'content-type': res.headers['content-type'],
                ...acaHeaders,
                version: process.version
            }
        });
    }, function (error) {
        if (error.data) {
            callback(null, {
                statusCode: error.statusCode,
                body: error.data,
                headers: acaHeaders
            });
        } else {
            callback(error);
        }
    });
}