/* eslint-disable prettier/prettier */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Forgotpassword from '../Src/Prenavigationscreens/Forgotpassword';
import DogsList1 from '../Src/Screen/DogsList1';
import LoginView from '../Src/Screen/LoginView';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {/*<Stack.Screen name="Login" component={Login} />*/}
      <Stack.Screen name="LoginView" component={LoginView} />
      <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
      <Stack.Screen name="DogsList1" component={DogsList1} />
    </Stack.Navigator>
  );
};

export default AuthStack;
