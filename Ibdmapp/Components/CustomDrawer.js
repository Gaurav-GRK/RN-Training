/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
  return (
    <>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'pink'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profileuser')}>
            <Image
              source={require('../assets/Profilephoto/Th.jpg')}
              style={styles.imagestyle1}></Image>
          </TouchableOpacity>
          <Text style={styles.DrawerTextstyle}>IMDB</Text>
        </View>
        <Text style={styles.Versionstyle}> version="0.0.1"</Text>
        <View style={{flex: 1, backgroundColor: 'white', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View>
        <TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/Logout.jpg')}
              style={styles.imagestyle}></Image>
            <Text style={styles.logtext}>Logout</Text>
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
    height: 70,
    width: 70,
    margin: 10,
    marginTop: 20,
    marginLeft: 15,
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
  },
});
