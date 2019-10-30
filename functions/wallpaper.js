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

            send(json);
        });
    });

    function send(json) {
        callback(null, {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type'
            },
            body: json
        });
    }
}