import {createDocument, loadDocuments} from '../api/documentService'

export const addDocument = (document) => ({
    type: 'ADD_DOCUMENT',
    document
});

export const receiveDocuments = (documents) => ({
    type: 'RECEIVE_DOCUMENTS',
    documents
});

export const fetchDocuments = () => (dispatch => {
    return loadDocuments().then(json => dispatch(receiveDocuments(json.documents)));
});

export const insertDocument = (key, value) => (dispatch => {
    return createDocument({key: key, value: value}).then(doc => dispatch(addDocument(doc)));
});