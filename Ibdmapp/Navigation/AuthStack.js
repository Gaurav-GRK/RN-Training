/* eslint-disable prettier/prettier */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Src/Prenavigationscreens/Login';
import Forgotpassword from '../Src/Prenavigationscreens/Forgotpassword';
import DogsList1 from '../Src/Screen/DogsList1';
import Home from '../Src/Screen/Home';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
      <Stack.Screen name="DogsList1" component={DogsList1} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AuthStack;
