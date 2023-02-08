import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Imdb from './Imdb';
import ImdbList from './ImdbList';

const Tab = createBottomTabNavigator();


const Home = ({ navigation }) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="IMDB" component={Imdb}   options={{headerShown:false }} />
            <Tab.Screen name="Imdb List" component={ImdbList} options={{headerShown:false}}  />
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