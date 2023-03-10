/* eslint-disable prettier/prettier */

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image} from 'react-native';
import Home from '../../Src/Screen/DogList3';
import ImdbHomescreen from '../../Src/Screen/ImdbHomescreen';
import List from '../../Src/Screen/List';
import SortingList from '../../Src/Screen/SortingList';



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
                source={require('../../assets/TabbarIcons/Home.png')}
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
                source={require('../../assets/TabbarIcons/MovieList.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="DogsList"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'List of Dogs',
          tabBarIcon: ({}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{
                  width: 30,
                  height: 25,
                  alignContent: 'center',
                  borderColor: 'black',
                }}
                source={require('../../assets/TabbarIcons/Dogs.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SortingList"
        component={SortingList}
        options={{
          headerShown: false,
          tabBarLabel: 'Sorting List',
          tabBarIcon: ({}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{
                  width: 40,
                  height: 25,
                  alignContent: 'center',
                  borderColor: 'black',
                }}
                source={require('../../assets/TabbarIcons/SortList.png')}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Bottomnavigation;
