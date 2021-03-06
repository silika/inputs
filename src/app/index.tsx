import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './';
import registerServiceWorker from './services/registerServiceWorker';
import './index.scss';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
