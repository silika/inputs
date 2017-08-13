import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Input from './Input';

it('renders input', () => {
    const tbody = document.createElement('tbody');
    const input = {
            protocol: 'FTP',
            format: 'CSV',
            url: 'ftp://datadrop.com/file.csv',
            parameters: '{a: "1", b: 2}',
            mapping: '{value: "wind_speed"}',
            state: 'active',
            checkEvery: 1,
            isActive: 'true'
        };

    ReactDOM.render(
        <Input input={input} />,
        tbody);
});