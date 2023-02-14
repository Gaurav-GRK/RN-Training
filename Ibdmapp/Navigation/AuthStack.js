/* eslint-disable prettier/prettier */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Prenavigationscreens/Login';
import Forgotpassword from '../Prenavigationscreens/Forgotpassword';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
