const https = require('https');
const { URL } = require('url');

/**
 * 接口原版参数：
 * n 数量，必填
 * idx 索引；默认0
 * format 响应格式：js、xml；默认xml
 * pid 大小；默认hp
 * mkt 语言，中文zh-CN；默认英文en-US
 * ensearch 是否显示详情：0、1；默认0
 * nc 时间戳
 */
const bingImageAPI = 'https://www.bing.com/HPImageArchive.aspx?format=js&n=1';

module.exports = function (params) {
    const url = new URL(bingImageAPI);

    url.searchParams.set('nc', Date.now());
    for (const key in params) {
        url.searchParams.set(key, params[key]);
    }

    return new Promise(function (resolve, reject) {
        https.get(url, function (res) {
            const result = {
                statusCode: res.statusCode,
                headers: {
                    'content-type': res.headers['content-type'],
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Headers': 'authorization'
                },
                url
            };

            if (res.statusCode === 200) {
                res.on('data', function (stream) {
                    const text = stream.toString();
                    result.data = text;
                    resolve(result);
                    console.info('success', result);
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