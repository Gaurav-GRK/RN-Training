import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AuthProvider} from './App/Navigator/Context';
import StackNavigator from './App/Navigator/StackNavigator';
function App() {
  return (
    <AuthProvider>
      <StackNavigator />
    </AuthProvider>
  );
}

export default App;

const styles = StyleSheet.create({});
