/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Button, View,Image,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ImdbHomescreen from '../Screen/ImdbHomescreen';
import Bottomnavigation from './Bottomnavigation/Bottomnavigation';

import About from '../Screen/About';



const Drawer = createDrawerNavigator();

export default function DrawerNavigator({navigation}) {
  return (
    /*<NavigationContainer>*/
      <Drawer.Navigator initialRouteName="Tabnavigator" >
        <Drawer.Screen name="Tapnavigator" component={Bottomnavigation} options={{title:'IMDB',headerStyle:{backgroundColor:'#3B4C5C' }, headerTitleStyle:{color:'white'}, headerTintColor:'white' ,
        drawerLabel:'Profile',
        drawerIcon: () => (
            <Image
              source={require('../assets/Profilephoto/Th.jpg')}
              style={{height: 100, width: 100}}
            />
          ),
        }} />
        <Drawer.Screen name="Homescreen" component={ImdbHomescreen} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    /*</NavigationContainer>*/
  );
}