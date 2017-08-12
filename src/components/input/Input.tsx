import * as React from 'react';

const Input = (input) => (
        <tr>
            <td>{input.protocol}</td>
            <td>{input.format}</td>
            <td>{input.url}</td>
            <td>{input.parameters}</td>
            <td>{input.checkEvery}</td>
            <td>{input.state}</td>
            <td>{input.mapping}</td>
        </tr>
    );

export default Input;
