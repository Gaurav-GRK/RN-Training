/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Profileuser = () => {
  return (
    <View style={styles.Container1}>
      <View>
        <ImageBackground
          source={require('../assets/background.jpg')}
          style={{ height: 200, width: 400 }}>
          <Image
            source={require('../assets/Profilephoto/Th.jpg')}
            style={styles.Imagestyle}></Image>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginLeft: 10,
              fontWeight: 'bold',
            }}>
            Abhishek Singh
          </Text>
          <Text style={{ color: 'white', fontSize: 15, marginLeft: 6 }}>
            {' '}
            UserName - Abhi67889
          </Text>
        </ImageBackground>
      </View>
      <View style={{ backgroundColor: 'white', flex: 1 }}></View>
    </View>
  );
};

export default Profileuser;

const styles = StyleSheet.create({
  Container1: {
    flex: 1,
  },
  Imagestyle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    marginTop: 40,
    marginLeft: 23,
  },
});
