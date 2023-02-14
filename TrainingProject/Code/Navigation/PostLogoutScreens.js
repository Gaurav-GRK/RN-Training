import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import DrawerTab from '../Screen/DrawerNavigator';
import MovieDetails from '../Screen/MovieDetails';
const Stack = createNativeStackNavigator()
export default function PostLogoutScreens(props) {
  return (
    <Stack.Navigator>
    <Stack.Screen name='DrawerTab' component={DrawerTab}options={{ headerShown: false }}/>
    <Stack.Screen name='MovieDetails' component={MovieDetails}/>
    </Stack.Navigator>
  )
}
const styles = StyleSheet.create({})