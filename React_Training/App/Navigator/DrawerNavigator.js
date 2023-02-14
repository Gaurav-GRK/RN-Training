import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Profile from '../Screens/ProfileView';
import CustomDrawer from '../Screens/CustomDrawer';
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="TabNavigator">
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerTitle: ''}}
      />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}
