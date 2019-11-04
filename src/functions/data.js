const bing = require('../utils/bing');

exports.handler = async function (event, context) {
    return bing(event.queryStringParameters, { headers: event.headers });
}