import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    menuStatus: 'CLOSED',
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'OPEN_MENU':
            return {
                ...state,
                menuStatus: 'OPEN',
            };
        case 'CLOSE_MENU':
            return {
                ...state,
                menuStatus: 'CLOSED',
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
