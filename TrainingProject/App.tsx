import * as React from 'react';
import { Provider } from 'react-redux';
import Routes from './Code/Navigation/Routes';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './Code/Redux/Store';
import SplashScreen from 'react-native-splash-screen'

function App() {
  React.useEffect(()=>{
    SplashScreen.hide()
  },[])
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;