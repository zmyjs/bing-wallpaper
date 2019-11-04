const https = require('https');
const { URL } = require('url');

const acaHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'authorization'
};

/**
 * 接口原版参数：
 * n 数量，必填
 * idx 索引；默认0
 * format 响应格式：js、xml；默认xml。
 * pid 可能跟大小有关；默认hp
 * nc 时间戳
 */
const bingImageAPI = 'https://www.bing.com/HPImageArchive.aspx?format=js&n=1';

module.exports = function (params, options) {
    const url = new URL(bingImageAPI);

    url.searchParams.set('nc', Date.now());
    for (const key in params) {
        url.searchParams.set(key, params[key]);
    }

    return new Promise(function (resolve, reject) {
        https.get(url, function (res) {
            const headers = Object.assign({
                'content-type': res.headers['content-type']
            }, acaHeaders);

            if (res.statusCode === 200) {
                res.on('data', function (data) {
                    const json = data.toString(),
                        result = JSON.parse(json);

                    result.base = url.origin;

                    resolve({
                        statusCode: 200,
                        headers,
                        body: JSON.stringify(result)
                    });
                    console.info(url);
                });
            } else {
                reject({
                    statusCode: res.statusCode,
                    headers,
                    body: res.statusMessage
                });
                console.warn('warn', res.statusCode, res.statusMessage);
            }
        }).on('error', function (error) {
            reject({
                statusCode: 500,
                body: JSON.stringify(error)
            });
            console.error('error', error);
        });
    });
}