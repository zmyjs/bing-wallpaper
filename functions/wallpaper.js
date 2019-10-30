const https = require('https');

const api = {
    origin: 'https://www.bing.com',
    pathname: '/HPImageArchive.aspx',
    getURL(search) {
        let url = `${this.origin}${this.pathname}?`;
        for (const key in search) {
            url += `${key}=${search[key]}&`;
        }
        url += `nc=${Date.now()}`;

        return url;
    }
};

exports.handler = function (event, context, callback) {
    /**
     * n 数量，必填
     * idx 索引；默认0
     * format 响应格式：js、xml；默认xml。
     * pid 可能跟大小有关；默认hp
     * nc 时间戳
     */
    const search = {
        n: 1,
        format: 'js'
    };
    Object.assign(search, event.queryStringParameters);

    https.get(api.getURL(search), function (res) {
        if (res.statusCode === 200) {
            res.on('data', function (data) {
                const json = data.toString(),
                    result = JSON.parse(json);

                result.images.forEach(function (img) {
                    const reg = /^\/\w+/;
                    for (const key in img) {
                        const value = img[key];
                        if (reg.test(value)) {
                            img[key] = api.origin + value;
                        }
                    }
                });

                send(null, 200, result);
            });
        } else {
            send(new Error(res.statusMessage), res.statusCode);
        }
    }).on('error', function (error) {
        send(error, 500);
    });


    function send(error, statusCode, data) {
        callback(error, {
            statusCode,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Headers': 'authorization'
            }
        });
    }
}