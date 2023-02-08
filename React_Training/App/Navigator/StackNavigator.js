import * as React from 'react';
import MoviesGrid from '../Screens/MoviesScene/MoviesGrid';
import TabNavigator from './TabNavigator';
import ListScreen from '../Screens/MoviesScene/ListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function StackNavigator() {
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown:false}}/>
      <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="MoviesGrid" component={MoviesGrid} options={{headerShown:false}}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;