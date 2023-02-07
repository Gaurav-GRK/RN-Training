import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Imdb from './Imdb';
import ImdbList from './ImdbList';

const Tab = createBottomTabNavigator();


const Home = ({ navigation }) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Imdb" component={Imdb} options={{
                headerTitleAlign: 'center',
                headerTitleStyle: { fontSize: 25 },
                headerLeft: () => (
                    <TouchableOpacity>
                        <View>
                            <Image source={require('../Assests/Images/back2.png')} style={styles.img1} />
                        </View>
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Movie Details')}>
                        <View>
                            <Image source={require('../Assests/Images/back.png')} style={styles.img2} />
                        </View>
                    </TouchableOpacity>
                ),
            }} />
            <Tab.Screen name="Imdb List" component={ImdbList} options={{
                headerTitleAlign: 'center',
                headerTitleStyle: { fontSize: 25 },
            }} />
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