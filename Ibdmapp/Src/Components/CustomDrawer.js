/* eslint-disable keyword-spacing */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { AuthContext } from '../Context/AuthContext';
import { USER_STATUS_SUCCESS } from '../Redux/Login/LoginActionTypes';
import {useDispatch, useSelector} from 'react-redux';




const CustomDrawer = props => {
  const nav = useNavigation();
  const { logout } = useContext(AuthContext);
   const dispatch = useDispatch();
   const logoutClicked = (userEmail,
  access_token,
  client,) => {
           dispatch(logoutAction(access_token, client, userEmail, nav));
        logout();
  };
  
  return (
    <>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: 'pink',borderTopRightRadius:160 }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profileuser')}>
            <Image
              source={require('../../assets/Profilephoto/Th.jpg')}
              style={styles.imagestyle1}></Image>
          </TouchableOpacity>
          <Text style={styles.DrawerTextstyle}>IMDB</Text>
        </View>
        <Text style={styles.Versionstyle}> Abhishek Singh</Text>
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View>
        <TouchableOpacity onPress={() => { logoutClicked()}}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../assets/Logout.jpg')}
              style={styles.imagestyle}></Image>
            <Text style={styles.logtext}>Signout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  logoutstyle: {
    padding: 20,
    borderTopWidth: 1,
  },
  logtext: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 5,
  },
  imagestyle1: {
    margin: 10,
    marginTop: 20,
    marginLeft: 15,
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  imagestyle: {
    height: 50,
    width: 50,
  },
  DrawerTextstyle: {
    fontSize: 30,
    color: 'black',
    marginLeft: 15,
    marginTop: 30,
  },
  Versionstyle: {
    fontSize: 15,
    color: 'black',
    marginLeft: 13,
    marginBottom: 15,
    fontWeight:'bold',
  },
});
