import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from "../Screen/LoginScreen/Login";
import ForgotPassword from "../Screen/LoginScreen/ForgotPassword";
import DrawerTab from "../Screen/DrawerNavigator";
const Stack = createNativeStackNavigator()
export default function PreLoginScreens(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}options={{ headerShown: false }}  />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  )
}
const styles = StyleSheet.create({})