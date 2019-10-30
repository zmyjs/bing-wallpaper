exports.handler = function (event, context, callback) {
    let result = { event, context };

    callback(null, { statusCode: 200, body: JSON.stringify(result) });
}