import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware} from "redux";
import documentsApp from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const store = createStore(documentsApp,
    applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
