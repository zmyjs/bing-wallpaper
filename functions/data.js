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

function getData(params) {
    const url = new URL(bingImageAPI);

    url.searchParams.set('nc', Date.now());
    for (const key in params) {
        url.searchParams.set(key, params[key]);
    }

    return new Promise(function (resolve, reject) {
        https.get(url, function (res) {
            const { statusCode } = res;
            const headers = Object.assign({}, res.headers, acaHeaders);

            if (statusCode === 200) {
                res.on('data', function (data) {
                    const json = data.toString(),
                        result = JSON.parse(json);
                    const reg = /^\/\w+/;

                    result.images.forEach(function (img) {
                        for (const key in img) {
                            const value = img[key];
                            if (reg.test(value))
                                img[key] = url.origin + value;
                        }
                    });

                    resolve({
                        statusCode, headers,
                        body: JSON.stringify(result)
                    });
                    console.info(url);
                });
            } else {
                reject({
                    statusCode, headers,
                    body: res.statusMessage
                });
                console.warn('warn');
            }
        }).on('error', function (error) {
            reject({
                statusCode: 500,
                body: JSON.stringify(error)
            });
            console.error('error');
        });
    });
}

exports.handler = async function (event, context) {
    console.log(event, context);
    return getData(event.queryStringParameters);
}