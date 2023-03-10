/* eslint-disable prettier/prettier */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Forgotpassword from '../Src/Prenavigationscreens/Forgotpassword';

import LoginView2 from '../Src/Screen/LoginView2';
import MpinLogin2 from '../Src/Screen/MpinLogin2';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {/*<Stack.Screen name="Login" component={Login} />*/}
      <Stack.Screen name="LoginView2" component={LoginView2} />
      <Stack.Screen name="MpinLogin2" component={MpinLogin2} />
      <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
