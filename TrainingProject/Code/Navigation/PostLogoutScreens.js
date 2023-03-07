import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import DrawerTab from '../Screen/DrawerNavigator';
import MovieDetails from '../Screen/MovieDetails';
import TopMovies from '../Screen/Movies/TopMovies';
import HomePage from '../Screen/HomePage';

const Stack = createNativeStackNavigator()
export default function PostLogoutScreens(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='DrawerTab' component={DrawerTab} options={{ headerShown: false }} />
      <Stack.Screen name='MovieDetails' component={MovieDetails} />
      <Stack.Screen name='TopMovies' component={TopMovies} />
      <Stack.Screen name='HomePage' component={HomePage} />

    </Stack.Navigator>
  )
}
const styles = StyleSheet.create({})