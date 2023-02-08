import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile';
import Imdb from './Imdb';
import Home from './Home';
import AboutUs from './AboutUs';
import CustomDrawer from '../Components/CustomDrawer'

const Drawer = createDrawerNavigator();

export default function DrawerTab() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer{...props} />}>
      <Drawer.Screen name='Imdb' component={Home} options={{
        headerTitleAlign: 'center',
        headerTitleStyle: { fontSize: 25 },
        headerStyle: { backgroundColor: '#3B4C5C' },
        headerTintColor: 'white',
        headerRight: () => (
          <View>
            <TouchableOpacity>
              <Image source={require('../Assests/Images/back.png')} style={styles.imgheader} />
            </TouchableOpacity>
          </View>
        )
      }} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="About Us" component={AboutUs} />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  imgheader: {
    height: 20,
    width: 20,
    marginRight: 15
  }
})