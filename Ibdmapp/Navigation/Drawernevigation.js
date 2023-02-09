/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Button, View, Image, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Bottomnavigation from './Bottomnavigation/Bottomnavigation';

import About from '../Screen/About';
import CustomDrawer from '../Components/CustomDrawer';
import Profileuser from '../Screen/Profileuser';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({navigation}) {
  return (
    /*<NavigationContainer>*/
    <Drawer.Navigator
      initialRouteName="Tabnavigator"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Tapnavigator"
        component={Bottomnavigation}
        options={{
          title: 'IMDB',
          headerStyle: {backgroundColor: '#3B4C5C'},
          headerTitleStyle: {color: 'white'},
          headerTintColor: 'white',
          drawerLabel: 'Home',
          drawerActiveBackgroundColor: 'blue',
          drawerActiveTintColor: 'pink',
          /* drawerStyle :{backgroundColor:'red'},*/
          drawerIcon: () => (
            <Image
              source={require('../assets/Home.jpg')}
              style={{height: 30, width: 30}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profileuser"
        component={Profileuser}
        options={{
          drawerActiveBackgroundColor: 'blue',
          headerShown: false,
          drawerActiveTintColor: 'pink',
          drawerLabel: 'Profile',
          drawerIcon: () => (
            <Image
              source={require('../assets/Profile.jpg')}
              style={{height: 30, width: 30}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
          drawerActiveBackgroundColor: 'blue',
          drawerActiveTintColor: 'pink',
          drawerIcon: () => (
            <Image
              source={require('../assets/About.jpg')}
              style={{height: 30, width: 30}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
    /*</NavigationContainer>*/
  );
}
