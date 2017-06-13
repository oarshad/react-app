import React, { Component } from 'react';
import {createDocument, loadDocuments} from './api/documentService'

class App extends Component {

    state = {
        keyDocuments : [],
        keyDocument: {
            key: '',
            value: ''
        }
    };

    componentDidMount() {
        loadDocuments()
            .then(keyDocuments => {
                this.setState(keyDocuments);
            });
    }

    handleFormSubmit = (evt) => {
        evt.preventDefault();

        if (!this.state.keyDocument.key || !this.state.keyDocument.value) {
            return;
        }

        createDocument(this.state.keyDocument)
            .then((doc) => {
                if (!doc.error) {
                    this.setState({
                        keyDocument: {key: '', value: ''},
                        keyDocuments: [...this.state.keyDocuments, doc]
                    });
                }
            });
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
      <div className="App">
          <form onSubmit={this.handleFormSubmit}>
              <label>Key:</label>
              <input type="text" ref="key" value={this.state.keyDocument.key} onChange={this.handleInputChange} />
              <label>Value:</label>
              <input type="text" ref="val" value={this.state.keyDocument.value} onChange={this.handleInputChange} />
              <button type="submit">Submit</button>
          </form>
          <ul>
              {this.state.keyDocuments.map(doc => <li key={doc.id}>{doc.key} - {doc.value}</li>)}
          </ul>
      </div>
    );
  }
}

export default App;
