/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text,Image,TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImdbHomescreen from '../Screen/ImdbHomescreen';
import List from '../Screen/List';
import Bottomnavigation from './Bottomnavigation/Bottomnavigation';
import Moviesdetail from '../Screen/Moviesdetail';

const Stack = createNativeStackNavigator();

function Navigationscreens({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ImdbHomescreen" component={Bottomnavigation} options={{headerShown:false}}/>
         <Stack.Screen name="List" component={List} />
           <Stack.Screen name="Moviesdetail" component={Moviesdetail} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigationscreens;
