import * as React from 'react';
import {Provider} from 'react-redux';
import { store } from './Code/Redux/Store';
import Routes from './Code/Navigation/Routes';

function App() {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}

export default App;