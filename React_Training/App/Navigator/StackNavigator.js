import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from './Context';
import {NavigationContainer} from '@react-navigation/native';
import PostLogoutScreens from '../Screens/PostLogoutScreens';
import PreLoginScreens from '../Screens/PreLoginScreen';

function StackNavigator() {
  const {isLogin} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isLogin !== null ? <PostLogoutScreens /> : <PreLoginScreens />}
    </NavigationContainer>
  );
}
export default StackNavigator;

const styles = StyleSheet.create({});
