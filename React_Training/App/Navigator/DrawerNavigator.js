import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions } from 'react-native';
import TabNavigator from './TabNavigator';
import Profile from '../Screens/Profile';

const Drawer = createDrawerNavigator();
export default function App() {
  return (

    <Drawer.Navigator
      screenOptions={{ drawerWidth: Dimensions.get('window').width * 0.9 }}
      initialRouteName="TabNavigator">
      <Drawer.Screen name="TabNavigator" component={TabNavigator} options={{ headerTitleStyle: { color: 'white' } }} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>

  );
}
