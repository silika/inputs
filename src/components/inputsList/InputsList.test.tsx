import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { InputsList } from './InputsList';

it('renders inputs List', () => {
    const div = document.createElement('div');
    const inputs = [
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
    ];

    ReactDOM.render(
        <InputsList inputs={inputs}/>,
        div);
});