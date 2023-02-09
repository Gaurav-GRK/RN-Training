/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View,Image,TouchableOpacity,} from 'react-native';

import ImdbHomescreen from '../../Screen/ImdbHomescreen';
import List from '../../Screen/List';

const Tab = createBottomTabNavigator();

function Bottomnavigation({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="ImdbHomescreen"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="ImdbHomescreen"
        component={ImdbHomescreen}
        options={{   title: '                              IMDB ',
            headerStyle: {backgroundColor: '#3B4C5C'},
            headerTitleStyle: {color: 'white'},
            headerTintColor: 'white',
            headerRight: () => (
              <TouchableOpacity
                Style={{}}
                onPress={() => navigation.navigate('Moviesdetail')}>
                <Image source={require('../../assets/V4.png')}
                style={{height:20,width:20, marginRight:15}}></Image>
              </TouchableOpacity>
            ),
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
                source={require('../../assets/Moviesimages/a2.jpg')}  />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
             headerShown:false,
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
                source={require('../../assets/Moviesimages/a2.jpg')}  />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Bottomnavigation;
