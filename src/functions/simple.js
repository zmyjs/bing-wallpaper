const bing = require('../utils/bing');

exports.handler = function (event, context, callback) {
    const params = Object.assign({}, event.queryStringParameters, { format: 'js' });

    bing(params).then(function (res) {
        const { origin } = res.url;
        let data = JSON.parse(res.data);

        data = data.images.map(function (image) {
            return {
                title: image.title || image.copyright,
                href: `${origin}${image.url}`,
                date: image.enddate,
                color: image.drk === 1 ? 'dark' : 'light'
            };
        });

        callback(null, {
            statusCode: res.statusCode,
            headers: res.headers,
            body: JSON.stringify(data)
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