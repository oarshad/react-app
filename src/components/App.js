import React, { Component } from 'react';
import AddDocument from '../containers/AddDocument';
import DocumentsList from '../containers/DocumentsList';

class App extends Component {

    render() {
        return (
            <div className="App">
                <AddDocument />
                <DocumentsList />
            </div>
        )
    }
}

export default App;
