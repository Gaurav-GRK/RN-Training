/* eslint-disable prettier/prettier */

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image} from 'react-native';

import ImdbHomescreen from '../../Screen/ImdbHomescreen';
import List from '../../Screen/List';

const Tab = createBottomTabNavigator();

function Bottomnavigation({route ,navigation}) {

  return (
    <Tab.Navigator
      initialRouteName="ImdbHomescreen"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="ImdbHomescreen"
        component={ImdbHomescreen}
        options={{
          headerShown:false,
          tabBarLabel: 'Home',
          tabBarIcon: ({}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{
                  width: 30,
                  height: 25,
                  alignContent: 'center',
                  borderColor: 'black',
                }}
                source={require('../../assets/Moviesimages/a2.jpg')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          headerShown: false,
          tabBarLabel: 'List of Movies',
          tabBarIcon: ({}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{
                  width: 30,
                  height: 25,
                  alignContent: 'center',
                  borderColor: 'black',
                }}
                source={require('../../assets/Moviesimages/a2.jpg')}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Bottomnavigation;
