import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetchDocuments } from '../actions';
import Document from '../components/Document';

class DocumentsList extends React.Component {

    componentWillMount() {
        this.props.dispatch(fetchDocuments());
    }

    render() {
        return (
            <ul>
                {this.props.documents.map(doc => <Document key={doc.id} dKey={doc.key} value={doc.value} />)}
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    documents: state.documents
});

DocumentsList.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(DocumentsList);