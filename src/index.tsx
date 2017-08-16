import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.scss';

const temporaryAppReducer = (state = {}, {type}) => {
    switch (type) {
        default:
            return state;
    }
};

const initialState = {
    inputs: {
        '1':
            {
                protocol: 'FTP',
                format: 'CSV',
                url: 'ftp://datadrop.com/file.csv',
                parameters: '{a: "1", b: 2}',
                mapping: '{value: "wind_speed"}',
                state: 'active',
                checkEvery: 1,
                isActive: 'true'
            }
    }

};

const store = createStore(temporaryAppReducer, initialState);
const appContainerElement = document.getElementById('inputsAppContainer');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    appContainerElement
);
