export function request() {
    return fetch(...arguments).then(res => res.json());
}