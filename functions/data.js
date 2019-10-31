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

function getData(params, options) {
    const url = new URL(bingImageAPI);

    url.searchParams.set('nc', Date.now());
    for (const key in params) {
        url.searchParams.set(key, params[key]);
    }

    // Object.assign(options, url);

    console.log(url);

    return new Promise(function (resolve, reject) {
        https.get(url, function (res) {
            const { statusCode } = res;
            const headers = res.getHeaders();
            Object.assign(headers, acaHeaders);

            if (res.statusCode === 200) {
                res.on('data', function (data) {
                    const json = data.toString();
                    const body = json.replace(/(\:\s*")(\/\w+)/g, `$1${url.origin}$2`);
                    resolve({ statusCode, headers, body });
                });
            } else {
                const body = res.statusMessage;
                reject({ statusCode, headers, body });
            }
        }).on('error', function (error) {
            reject({
                statusCode: 500,
                body: JSON.stringify(error)
            })
        });
    });
}

exports.handler = async function (event) {
    return getData(
        event.queryStringParameters,
        {
            headers: { 'accept-language': event.headers['accept-language'] }
        }
    );
}