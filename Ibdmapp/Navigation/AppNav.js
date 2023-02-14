/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable keyword-spacing */
/* eslint-disable react/self-closing-comp */

/* eslint-disable prettier/prettier */
import {  View,ActivityIndicator } from 'react-native';
import React, { useContext }from 'react';
import AuthStack from './AuthStack';


import { AuthContext } from '../context/AuthContext';
import Appstack from './Appstack';
import {NavigationContainer} from '@react-navigation/native';

const AppNav = () => {
    const {isLoading, userToken} = useContext(AuthContext);
    if (isLoading){
        return(
        <View style={{flex:1, justifyContent:'center',alignItems:'center' }}>
        <ActivityIndicator size={'large'}></ActivityIndicator>
        </View>
        );
    }
  return (
   <NavigationContainer>
    {userToken !==null ? <Appstack/>:<AuthStack/>}
</NavigationContainer>

  );
};

export default AppNav;


