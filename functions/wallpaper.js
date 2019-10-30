const https = require('https');

const location = {
    origin: 'https://cn.bing.com',
    pathname: '/HPImageArchive.aspx',
    search: '?format=js&idx=0&n=1&pid=hp',
    get href() {
        return this.origin + this.pathname + this.search;
    }
}

exports.handler = function (event, context, callback) {
    https.get(location.href, function (res) {
        res.on('data', function (data) {
            const json = data.toString();

            callback(null, {
                statusCode: 200,
                headers: { 'content-type': 'application/json; charset=utf-8' },
                body: json
            });
        });
    });
}