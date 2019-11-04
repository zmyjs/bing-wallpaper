export function images(number, index = 0) {
    const url = new URL('/image');
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