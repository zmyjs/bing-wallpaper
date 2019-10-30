const https = require('https');

const api = {
    origin: 'https://www.bing.com',
    pathname: '/HPImageArchive.aspx'
};

function absolute(img) {
    const reg = /^\/\w+/;
    for (const key in img) {
        const value = img[key];
        if (reg.test(value)) {
            img[key] = api.origin + value;
        }
    }
}

function getURL(search) {
    let url = `${api.origin}${api.pathname}?`;
    for (const key in search) {
        url += `${key}=${search[key]}&`;
    }
    url += 'format=js';

    return url;
}

exports.handler = function (event, context, callback) {
    /**
     * n 数量，必填
     * idx 索引；默认0
     * format 响应格式：js、xml；默认xml。
     * pid 可能跟大小有关；默认hp
     * nc 时间戳
     */
    const search = { n: 1, nc: Date.now() };
    Object.assign(search, event.queryStringParameters);

    https.get(getURL(search), function (res) {
        res.on('data', function (data) {
            const json = data.toString();
            const result = JSON.parse(json);
            result.res = res;
            result.event = event;
            success(result);
        });
    }).on('error', callback);

    function success(data, debug) {
        data.images.forEach(absolute);

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