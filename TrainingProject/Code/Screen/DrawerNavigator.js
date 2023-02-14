import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile';
import Home from './TabNavigator';
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
          ),
          drawerIcon: () => (
            <View style={styles.imdbContainer}>
              <Image source={require('../Assests/Images/imdb.png')} style={styles.imdbImg} />
            </View>
          ),
        }} />
        <Drawer.Screen name="Profile" component={Profile} options={{
          headerTitleAlign: 'center',
          headerTitleStyle: { fontSize: 25 },
          headerStyle: { backgroundColor: '#3B4C5C' },
          headerTintColor: 'white',
          drawerIcon: () => (
            <View style={styles.imdbContainer}>
              <Image source={require('../Assests/Images/profile.png')} style={styles.imdbImg} />
            </View>
          )
        }} />
        <Drawer.Screen name="AboutUs" component={AboutUs} options={{
          headerTitleStyle: { fontSize: 25, color: '#3B4C5C' },
          headerStyle: { backgroundColor: '#3B4C5C' },
          headerTintColor: 'white',
          drawerIcon: () => (
            <View style={styles.imdbContainer}>
              <Image source={require('../Assests/Images/aboutus.jpg')} style={styles.imdbImg} />
            </View>
          )
        }} />
      </Drawer.Navigator>
    
  )
}

const styles = StyleSheet.create({
  imgheader: {
    height: 20,
    width: 20,
    marginRight: 15,

  },
  imdbImg: {
    width: 30,
    height: 30,
    alignContent: 'center'
  },
  imdbContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4
  }
})