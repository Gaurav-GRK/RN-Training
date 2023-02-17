/* eslint-disable prettier/prettier */
import React from 'react';
import Drawernevigation from './Drawernevigation';
import Moviesdetail from '../Src/Screen/Moviesdetail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const Appstack = () => {
  return (
  <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Drawernevigation" component={Drawernevigation} />
      <Stack.Screen name="Moviesdetail" component={Moviesdetail} />
    </Stack.Navigator>
  );
};

export default Appstack;

