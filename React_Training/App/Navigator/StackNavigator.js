import MoviesGrid from '../Screens/MoviesScene/MoviesGrid';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator'
import ListScreen from '../Screens/MoviesScene/ListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetails from '../Screens/MoviesScene/MovieDetails';
import CustomDrawer from '../Screens/CustomDrawer';
import ProfileView from '../Screens/ProfileView';
import Watchlist from '../Screens/Watchlist';
function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="MoviesGrid" component={MoviesGrid} options={{ headerShown: false }} />
        <Stack.Screen name="CustomDrawer" component={CustomDrawer} options={{ headerShown: false  }} />    
        <Stack.Screen name="ListScreen" component={ListScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ProfileView" component={ProfileView} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} options={{ headerShown: false }} />
        <Stack.Screen name="Watchlist" component={Watchlist} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default StackNavigator;