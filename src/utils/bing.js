const https = require('https');
const { URL } = require('url');



/**
 * 接口原版参数：
 * n 数量，必填
 * idx 索引；默认0
 * format 响应格式：js、xml；默认xml。
 * pid 可能跟大小有关；默认hp
 * nc 时间戳
 */
const bingImageAPI = 'https://www.bing.com/HPImageArchive.aspx?format=js&n=1';

module.exports = function (params) {
    const url = new URL(bingImageAPI);

    url.searchParams.set('nc', Date.now());
    for (const key in params) {
        url.searchParams.set(key, params[key]);
    }

    console.log(url);

    return new Promise(function (resolve, reject) {
        https.get(url, function (res) {
            const result = {
                headers: res.headers,
                statusCode: res.statusCode
            };

            if (res.statusCode === 200) {
                res.on('data', function (data) {
                    const json = data.toString();

                    result.data = JSON.parse(json);
                    result.data.base = url.origin;
                    resolve(result);
                });
            } else {
                result.data = res.statusMessage;
                reject(result);
                console.warn('warn', result);
            }
        }).on('error', function (error) {
            reject(error);
            console.error('error', error);
        });
    });
}