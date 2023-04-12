import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import DrawerTab from '../Screen/DrawerNavigator';
import MovieDetails from '../Screen/MovieDetails';
import TopMovies from '../Screen/Movies/TopMovies';
import HomePage from '../Screen/HomePage';
import Notification from '../Screen/Notification';
import CustomPickerComPonent from '../Components/CustomPickerComPonent';
import DrawerView from '../Screen/DrawerView';
import Profile from '../Screen/Profile';
import Imdb from '../Screen/Imdb';
import AboutUs from '../Screen/AboutUs';
import Home from '../Screen/TabNavigator';
import ScreenA from '../Screen/ScreenA';
import ScreenB from '../Screen/ScreenB';
import ScreenC from '../Screen/ScreenC';
import PostProjectScene from '../Screen/PostProject/PostProjectScene';
import PostProjectScene2 from '../Screen/PostProject/PostProjectScene2';
import PostProjectScene3 from '../Screen/PostProject/PostProjectScene3';



const Stack = createNativeStackNavigator()
export default function PostLogoutScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomePage' component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name='MovieDetails' component={MovieDetails} />
      <Stack.Screen name='TopMovies' component={TopMovies} />
      <Stack.Screen name='Notification' component={Notification} options={{
        headerShown: false
      }} />
      <Stack.Screen name='CustomPickerComPonent' component={CustomPickerComPonent} />
      <Stack.Screen name='DrawerView' component={DrawerView} options={{headerShown: false}} />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Imdb' component={Imdb} />
      <Stack.Screen name='AboutUs' component={AboutUs} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='ScreenA' component={ScreenA} />
      <Stack.Screen name='ScreenB' component={ScreenB} />
      <Stack.Screen name='ScreenC' component={ScreenC} />
      <Stack.Screen name='PostProjectScene' component={PostProjectScene} />
      <Stack.Screen name='PostProjectScene2' component={PostProjectScene2} />
      <Stack.Screen name='PostProjectScene3' component={PostProjectScene3} />
    </Stack.Navigator>
  )
}
const styles = StyleSheet.create({})