/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './Src/Store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { AuthProvider } from './Src/Context/AuthContext';
import AppNav from './Navigation/AppNav';
const App = () => {
  return (
   /* <Provider store={store}>
        <AuthProvider>
          <AppNav />
        </AuthProvider>
    </Provider>
  */
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AuthProvider>
          <AppNav />
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;


