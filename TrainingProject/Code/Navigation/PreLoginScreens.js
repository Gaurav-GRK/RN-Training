import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ForgotPassword from "../Screen/LoginScreen/ForgotPassword";
import Login from "../Screen/LoginScreen/Login";
import MpinLogin from "../Screen/MpinLogin";
const Stack = createNativeStackNavigator()
export default function PreLoginScreens(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}  />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name='MpinLogin' component={MpinLogin} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
const styles = StyleSheet.create({})