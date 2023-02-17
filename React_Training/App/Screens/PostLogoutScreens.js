import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState} from 'react';
import DogBreedsScreen from './DogScreen';
import DrawerNavigator from '../Navigator/DrawerNavigator';
import MovieDetails from '../Screens/MoviesScene/MovieDetails';
const Stack = createNativeStackNavigator();
export default function PostLogoutScreens(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DogBreedsScreen"
        component={DogBreedsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({});
