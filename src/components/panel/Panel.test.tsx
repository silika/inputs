import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import inputsApp from '../../reducers';
import Panel from './Panel';

it('renders empty panel', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Panel isEmpty={true}/>,
        div);
});

it('renders panel with inputsList', () => {
    const div = document.createElement('div');
    const initialState = {
        inputs: [
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
        ]
    };
    const store = createStore(inputsApp, initialState);
    ReactDOM.render(
        <Provider store={store}>
            <Panel isEmpty={false}/>
        </Provider>,
        div);
});