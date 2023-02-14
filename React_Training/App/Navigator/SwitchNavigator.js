import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import LoginView from '../Screens/LoginView';
import ForgotPasswordScreen from '../Screens/ForgotScene';
import DrawerNavigator from '../Navigator/DrawerNavigator';
const HomeStack = createSwitchNavigator({
  DrawerNavigator: DrawerNavigator,
});

const LoginStack = createSwitchNavigator({
  LoginView: LoginView,
  ForgotPasswordScreen: ForgotPasswordScreen,
});

const Switchnavigation = createSwitchNavigator(
  {
    HomeStack: HomeStack,
    LoginStack: LoginStack,
  },
  {
    initialRouteName: 'HomeStack',
  },
);
export default createAppContainer(Switchnavigation);
