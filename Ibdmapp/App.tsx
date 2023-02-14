/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


import { AuthProvider } from './context/AuthContext';
import AppNav from './Navigation/AppNav';
const App = () => {
  return (
    <AuthProvider>
<AppNav />
</AuthProvider>
  );
};

export default App;


