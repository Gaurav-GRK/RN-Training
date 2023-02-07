/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImdbHomescreen from '../Screen/ImdbHomescreen';
import List from '../Screen/List';

const Stack = createNativeStackNavigator();

function Navigationscreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ImdbHomescreen" component={ImdbHomescreen} />
         <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigationscreens;
