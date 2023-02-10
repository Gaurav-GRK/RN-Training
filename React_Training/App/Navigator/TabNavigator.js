import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import ListScreen from '../Screens/MoviesScene/ListScreen';
import MoviesGrid from '../Screens/MoviesScene/MoviesGrid';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="MoviesGrid" component={MoviesGrid}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (

            <Image
              resizeMode='contain'
              style={styles.bottomTabIcon}
              source={require('../Assets/Images/grid.png')
              }></Image>

          ),

        }}
      />
      <Tab.Screen name="List" component={ListScreen}
        options={{
          // headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (

            <Image
              resizeMode='contain'
              style={styles.bottomTabIcon1}
              source={require('../Assets/Images/list.png')
              }></Image>

          ),

        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
  bottomTabIcon: {
    height: 37,
    width: 37
  },
  bottomTabIcon1: {
    height: 27,
    width: 24
  },


})