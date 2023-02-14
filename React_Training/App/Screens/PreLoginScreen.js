import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginPage from './LoginView';
import ForgotPasswordScreen from './ForgotScene';
const Stack = createNativeStackNavigator();
export default function PreLoginScreens(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{headerTitle: ''}}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({});
