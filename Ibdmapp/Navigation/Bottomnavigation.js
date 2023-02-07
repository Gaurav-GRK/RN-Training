
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Action from '../Screen/Action';
import List from '../Screen/List';

const Tab = createBottomTabNavigator();

function Bottomnavigation() {
  return (
    <Tab.Navigator
      initialRouteName="List"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="List"
        component={List}
        options={{
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
                source={require('../assets/Moviesimages/a2.jpg')} ></Image>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Action"
        component={Action}
        options={{
          tabBarLabel: 'Updates',
         tabBarIcon: ({}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{
                  width: 30,
                  height: 25,
                  alignContent: 'center',
                  borderColor: 'black',
                }}
                source={require('../assets/Moviesimages/a2.jpg')} ></Image>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Bottomnavigation;