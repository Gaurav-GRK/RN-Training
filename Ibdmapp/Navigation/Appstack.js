/* eslint-disable prettier/prettier */
import React from 'react';
import Drawernevigation from './Drawernevigation';
import Moviesdetail from '../Src/Screen/Moviesdetail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import List from '../Src/Screen/List';
import Home from '../Src/Screen/DogList3';
import About from '../Src/Screen/About';
import SorTingView from '../Src/Screen/SorTingView';
import FilterList from '../Src/Screen/FilterList';


const Stack = createNativeStackNavigator();

const Appstack = () => {

  return (
  <Stack.Navigator >
      <Stack.Screen name="Drawernevigation" component={Drawernevigation} options={{headerShown:false}}/>
     <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
     <Stack.Screen name="List" component={List} options={{headerShown:false}}/>
     <Stack.Screen name="About" component={About} options={{headerShown:false}}/>
      <Stack.Screen name="SorTingView" component={SorTingView} options={{headerShown:false}}/>
      <Stack.Screen name="Moviesdetail" component={Moviesdetail} />
      <Stack.Screen name="FilterList" component={FilterList} />
    </Stack.Navigator>
  );
};

export default Appstack;

