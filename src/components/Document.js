import React from 'react';

class Document extends React.Component {

    render() {
        return <li>Key: {this.props.dKey} - Value: {this.props.value}</li>
    }
}

export default Document;