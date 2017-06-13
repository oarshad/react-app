export const loadDocuments = () => {
    return fetch('/api/findAll')
        .then(res => res.json());
};

export const createDocument = (keyDoc) => {
    return fetch('/api/save', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(keyDoc)
    }).then(res => res.json());
};