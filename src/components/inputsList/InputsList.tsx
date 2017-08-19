import * as React from 'react';
import { Input } from '../input';

export function InputsList({ inputs }) {
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
                inputs.map((input, index) => (
                    <Input key={input.id || index} input={input}  />
                ))
            }
            </tbody>

        </table>
    );
}