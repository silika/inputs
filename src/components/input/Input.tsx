import * as React from 'react';

export function Input({ input }) {
    return (
        <tr>
            <td>{input.protocol}</td>
            <td>{input.format}</td>
            <td>{input.url}</td>
            <td>{input.parameters}</td>
            <td>{input.mapping}</td>
            <td>{input.state}</td>
            <td>{input.checkEvery}</td>
            <td>{input.isActive}</td>
        </tr>
    );
}
