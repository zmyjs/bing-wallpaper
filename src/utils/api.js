const base = 'https://bing-wallpaper.netlify.com';

export function images(number, index = 0) {
    const url = new URL('/image', base);

    url.searchParams.append('n', number);
    url.searchParams.append('idx', index);
    url.searchParams.append('mkt', 'zh-CN');
    url.searchParams.append('nc', Date.now());
    url.searchParams.append('format', 'js');

    return fetch(url).then(res => res.json());
}