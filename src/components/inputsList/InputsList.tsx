import * as React from 'react';
import Input from '../input/Input';

const InputList = ({ inputs }) => (
    hasInputs(inputs) ? <InputsTable inputs={inputs}/>
                      : <TablePlaceholder/>
);

export default InputList;

const TablePlaceholder = () => (
    <table>
        <tbody>
            <tr>
                <td>No items loaded</td>
            </tr>
        </tbody>
    </table>
);

const InputsTable = ({inputs}) => (
    <table>
        <thead>
        {
            renderTableHeader(inputs)
        }
        </thead>
        <tbody>
        {
            renderTableBody(inputs)
        }
        </tbody>

    </table>
);

const hasInputs = (inputs) => inputs.length;

const renderTableHeader = (inputs) => {

    return (
        <tr>
        {
            Object.keys(inputs[0]).map((header, index) => (
                <th key={index}>{header}</th>
            ))
        }
        </tr>
    );
};

const renderTableBody = (inputs) => {

    return inputs.map(input => (
        <Input key={input.id} {...input}  />
    ));
};