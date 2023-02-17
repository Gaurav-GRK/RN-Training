import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Imdb from './Imdb';
import ImdbList from './ImdbList';
import DogsList from './DogsList';

const Tab = createBottomTabNavigator();
const Home = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="IMDB" component={Imdb} options={{
                headerShown: false,
                tabBarIcon: () => (
                    <View>
                        <Image source={require('../Assests/Images/grid.jpg')} style={{ height: 30, width: 30 }} />
                    </View>
                )
            }} />
            <Tab.Screen name="Imdb List" component={ImdbList} options={{
                headerShown: false,
                tabBarIcon: () => (
                    <View>
                        <Image source={require('../Assests/Images/list.jpg')} style={{ height: 30, width: 30 }} />
                    </View>
                )
            }} />
            <Tab.Screen name='DogsList' component={DogsList} options={{
                headerShown:false,
                tabBarIcon: () => (
                    <View>
                        <Image source={require('../Assests/Images/list.jpg')} style={{ height: 30, width: 30 }} />
                    </View>
                )
            }}/>
        </Tab.Navigator>
    )
}
export default Home

const styles = StyleSheet.create({
    img1:
    {
        height: 20,
        width: 25,
        tintColor: 'black',
        marginLeft: 12
    },
    img2: {
        height: 20,
        width: 25,
        tintColor: 'black',
        marginRight: 12
    }

})