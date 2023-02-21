import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from './Context'
import { NavigationContainer } from '@react-navigation/native'
import PostLogoutScreens from './PostLogoutScreens'
import PreLoginScreens from './PreLoginScreens'

 function StackNav() {
    const {isLogin}=useContext(AuthContext)
  return (
    
   <NavigationContainer>
        {isLogin!==null?<PostLogoutScreens/>:<PreLoginScreens/>}
   </NavigationContainer>
  )
}
export default StackNav
const styles = StyleSheet.create({})