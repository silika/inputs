import * as React from 'react';
import Input from '../input/Input';

const InputsList = ({ inputs }) => (
    <table>
        <thead>
        <tr>
            <th>protocol</th>
            <th>format</th>
            <th>url</th>
            <th>parameters</th>
            <th>checkEvery</th>
            <th>state</th>
            <th>mapping</th>
        </tr>
        </thead>
        <tbody>
        {
            Object.keys(inputs).map((inputId) => (
                <Input key={inputId} {...inputs[inputId]}  />
            ))
        }
        </tbody>

    </table>
);

export default InputsList;