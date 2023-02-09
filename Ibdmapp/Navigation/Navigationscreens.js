/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImdbHomescreen from '../Screen/ImdbHomescreen';
import List from '../Screen/List';
import Bottomnavigation from './Bottomnavigation/Bottomnavigation';
import Moviesdetail from '../Screen/Moviesdetail';
import DrawerNavigator from './Drawernevigation';

const Stack = createNativeStackNavigator();

function Navigationscreens({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Drawernavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        {/*<Stack.Screen name="List" component={List} />*/}

        <Stack.Screen name="Moviesdetail" component={Moviesdetail} options={{ headerStyle: { backgroundColor: '#3B4C5C' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigationscreens;
