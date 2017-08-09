import { Action } from 'redux';

interface ActionWithPayload extends Action {
  payload: any
}

const inputs = (state = [], {type, payload}: ActionWithPayload) => {
  switch (type) {
    case 'ADD_INPUT':
      return [
        ...state,
        {
          id: payload.id,
          protocol: payload.protocol,
          format: payload.format,
          url: payload.url,
          parameters: payload.parameters,
          mapping: payload.mapping,
          checkEvery: payload.checkEvery,
          isActive: payload.isActive,
        }
      ];
    default:
      return state;
  }
};

export default inputs;