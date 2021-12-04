const baseUrl = 'http://localhost:3030/data/games';

export function getall() {
    return fetch(`${baseUrl}?sortBy=_createdOn%20desc`)
        .then(res => res.json());
}

export function getOne(id) {
    return fetch(`${baseUrl}/${id}`)
        .then(res => res.json());
}

export function getLatestGames() {
    return fetch(`${baseUrl}?sortBy=_createdOn%20desc&distinct=category`)
        .then(res => res.json());
}