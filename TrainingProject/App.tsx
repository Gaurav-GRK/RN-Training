
import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Imdb from './Code/Screen/Imdb';
import Home from './Code/Screen/Home';
import MovieDetails from './Code/Screen/MovieDetails';
import DrawerTab from './Code/Screen/DrawerTab';

const Stack = createNativeStackNavigator();




function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='DrawerTab' component={DrawerTab}options={{headerShown:false}}  />
        <Stack.Screen name='Movie Details' component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;