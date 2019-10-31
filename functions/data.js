const https = require('https');

/**
 * 接口原版参数：
 * n 数量，必填
 * idx 索引；默认0
 * format 响应格式：js、xml；默认xml。
 * pid 可能跟大小有关；默认hp
 * nc 时间戳
 */
const bingImageAPI = 'https://www.bing.com/HPImageArchive.aspx?format=js&n=1';

function getData(params, options) {
    const url = new URL(bingImageAPI);

    url.searchParams.set('nc', Date.now());
    for (const key in params) {
        url.searchParams.set(key, params[value]);
    }

    Object.assign(url, options);

    console.log(url);

    return new Promise(function (resolve, reject) {
        https.get(url, function (res) {
            if (res.statusCode === 200) {
                res.on('data', function (data) {
                    const json = data.toString(),
                        result = JSON.parse(json);

                    result.images.forEach(function (img) {
                        const reg = /^\/\w+/;
                        for (const key in img) {
                            const value = img[key];
                            if (reg.test(value)) {
                                img[key] = options.origin + value;
                            }
                        }
                    });

                    resolve(result);
                });
            } else {
                reject(res);
            }
        }).on('error', reject);
    });
}

exports.handler = function (event, context, callback) {
    console.log(process.version);

    getData(event.queryStringParameters, { headers: event.headers }).then(function (res) {
        send(null, 200, res);
    }, function (error) {
        send(error, error.statusCode || 500, error);
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