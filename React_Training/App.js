import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './App/Navigator/StackNavigator'
const Stack = createNativeStackNavigator();
const App = () => {
  return (
  
    <StackNavigator />
  
  )
}

export default App

const styles = StyleSheet.create({})