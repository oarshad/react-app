import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { insertDocument } from '../actions';

class AddDocument extends React.Component {

    state = {
        keyDocument: {
            key: '',
            value: ''
        }
    };

    handleFormSubmit = (evt) => {
        evt.preventDefault();

        if (!this.state.keyDocument.key.trim() || !this.state.keyDocument.value.trim()) {
            return;
        }

        this.props.dispatch(insertDocument(this.state.keyDocument.key, this.state.keyDocument.value));

        this.setState({keyDocument: {key: '', value: ''}});

    };

    handleInputChange = () => {
        this.setState({
            keyDocument: {
                key: this.refs.key.value,
                value: this.refs.val.value
            }
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Key:</label>
                    <input type="text" ref="key" value={this.state.keyDocument.key} onChange={this.handleInputChange} />
                    <label>Value:</label>
                    <input type="text" ref="val" value={this.state.keyDocument.value} onChange={this.handleInputChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

AddDocument.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect()(AddDocument);