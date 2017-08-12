import { IInput } from '@autumn-platform/inputs';

export const addInput = (input: IInput ) => {
  return {
    type: 'ADD_INPUT',
    payload: {input}
  };
};