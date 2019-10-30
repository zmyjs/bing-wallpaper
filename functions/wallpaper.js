const https = require('https');

const api = {
    origin: 'https://cn.bing.com',
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

exports.handler = function (event, context, callback) {
    /**
     * n 数量，必填
     * idx 索引；默认0
     * format 响应格式：js、xml；默认xml。
     * pid 可能跟大小有关；默认hp
     * nc 可能是时间戳
     */
    const search = { n: 1 };
    Object.assign(search, event.queryStringParameters);

    let url = `${api.origin}${api.pathname}?`;
    for (const key in search) {
        url += `${key}=${search[key]}&`;
    }
    url += 'format=js';

    https.get(url, function (res) {
        res.on('data', function (data) {
            const json = data.toString();
            success(JSON.parse(json));
        });
    }).on('error', callback);

    function success(data) {
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