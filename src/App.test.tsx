import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
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
    ReactDOM.render(
      <Provider store={store}>
        <App  />
      </Provider>,
      div);
    });
