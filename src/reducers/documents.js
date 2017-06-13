const document = (state, action) => {
    switch (action.type) {
        case 'ADD_DOCUMENT':
            return {
                ...action.document
            };
        default:
            return state;
    }
};

const documents = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DOCUMENT':
            return [
                ...state,
                document(undefined, action)
            ];
        case 'RECEIVE_DOCUMENTS':
            return action.documents;
        default:
            return state;
    }
};

export default documents;