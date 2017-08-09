import * as React from 'react';
import './App.scss';
import { InputListContainer } from './containers/InputList';

class App extends React.Component<{}, {}> {
  render() {
    return (
       <div className="App">
           <InputListContainer />
       </div>
    );
  }
}

export default App;
