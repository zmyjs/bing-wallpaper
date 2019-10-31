const https = require('https');

const href = 'https://www.bing.com/HPImageArchive.aspx?format=js&n=1';

/**
 * 接口原版参数：
 * n 数量，必填
 * idx 索引；默认0
 * format 响应格式：js、xml；默认xml。
 * pid 可能跟大小有关；默认hp
 * nc 时间戳
 */
module.exports = function (params, options) {
    const url = new URL(href);

    url.searchParams.set('nc', Date.now());
    for (const key in params) {
        url.searchParams.set(key, params[value]);
    }

    console.info(url, options);

    return new Promise(function (resolve, reject) {
        https.get(url, options, function (res) {
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