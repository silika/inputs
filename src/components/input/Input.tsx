import * as React from 'react';

const Input = (input) => {
    return (
        <tr>
        {
            Object.keys(input).map((header, index) => (
                <td key={index}>{input[header]}</td>
            ))
        }
        </tr>
    );
};

export default Input;
