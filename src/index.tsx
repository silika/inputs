import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import inputsApp from './reducers';
import './index.scss';

const initialState = {
    inputs: [
        {
            id: 1,
            protocol: 'FTP',
            format: 'CSV',
            url: 'ftp://datadrop.com/file.csv',
            parameters: '{a: "1", b: 2}',
            mapping: '{value: "wind_speed"}',
            checkEvery: 1,
            isActive: 'true'
        }
    ]
};
const store = createStore(inputsApp, initialState);
const appContainerElement = document.getElementById('inputsAppContainer');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    appContainerElement
);
