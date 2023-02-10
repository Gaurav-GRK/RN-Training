import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerTab from '../Screen/DrawerNavigator'
import MovieDetails from '../Screen/MovieDetails'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screen/LoginScreen/Login';
import ForgotPassword from '../Screen/LoginScreen/ForgotPassword';
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='DrawerTab' component={DrawerTab}options={{headerShown:false}}  />
        <Stack.Screen name='MovieDetails' component={MovieDetails} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
      </Stack.Navigator>
      </NavigationContainer> 
  )
}

export default StackNavigator


const styles = StyleSheet.create({})