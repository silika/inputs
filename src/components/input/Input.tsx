import * as React from 'react';

const Input = ({ id, protocol, format, url, parameters, mapping, checkEvery, isActive}) => (
  <tr>
      <td>{id}</td>
      <td>{protocol}</td>
        <td>{format}</td>
        <td>{url}</td>
        <td>{parameters}</td>
        <td>{mapping}</td>
        <td>{checkEvery}</td>
        <td>{isActive}</td>
  </tr>
);

export default Input;