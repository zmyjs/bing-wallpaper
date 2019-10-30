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
        res.on('data', function (data) {
            const json = data.toString();
            const result = JSON.parse(json);
            result.res = res;
            result.event = event;
            success(result);
        });
    }).on('error', callback);

    function success(data, debug) {
        data.images.forEach(function (img) {
            const reg = /^\/\w+/;
            for (const key in img) {
                const value = img[key];
                if (reg.test(value)) {
                    img[key] = api.origin + value;
                }
            }
        });

        callback(null, {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Headers': 'authorization'
            },
            body: JSON.stringify(data)
        });
    }
}