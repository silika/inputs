import * as React from 'react';
import Input from '../input/Input';

const InputList = ({ inputs }) => (
  <table>
    <thead>
      <tr>
      {
          inputs.length
              ? renderHeaders()
              : null
      }
      </tr>
    </thead>
    <tbody>
    {
        inputs.map(input => (
            <Input key={input.id} {...input}  />
        ))
    }
    </tbody>

  </table>
);

export default InputList;

function renderHeaders () {
   let headers = [
       'id',
       'protocol',
       'format',
       'url',
       'parameters',
       'mapping',
       'checkEvery',
       'isActive'
   ]
   return headers.map( (header, index) => (
        <th key={index}>{header}</th>
    ));
}