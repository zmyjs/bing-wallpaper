export function bing(number = 1, index = 0) {
    const url = new URL('/bing', window.location);
    const params = {
        n: number,
        idx: index,
        mkt: 'zh-CN',
        nc: Date.now(),
        format: 'js'
    }

    for (const key in params) {
        url.searchParams.append(key, params[key]);
    }

    return fetch(url).then(res => res.json());
}