import * as React from 'react';
import { Input } from '../input';

export default function InputsList({ inputs }) {
    return (
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
                inputs.map((input, inputIndex) => (
                    <Input key={inputIndex} input={input}  />
                ))
            }
            </tbody>

        </table>
    );
}