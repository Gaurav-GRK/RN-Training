import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerTab from '../Screen/DrawerNavigator'
import MovieDetails from '../Screen/MovieDetails'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='DrawerTab' component={DrawerTab}options={{headerShown:false}}  />
        <Stack.Screen name='MovieDetails' component={MovieDetails} />
      </Stack.Navigator>
      </NavigationContainer>
    
  )
}

export default StackNavigator

const styles = StyleSheet.create({})