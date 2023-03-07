import * as React from 'react';
import { Provider } from 'react-redux';
import Routes from './Code/Navigation/Routes';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './Code/Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;