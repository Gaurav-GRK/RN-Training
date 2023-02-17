/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const About = () => {
  return (
    <View style={{flex: 1}}>
      <View>
        <ImageBackground
          source={require('../../assets/background.jpg')}
          style={styles.backgroundstyle}>
          <Image
            source={require('../../assets/About.jpg')}
            style={styles.Imagestyle}></Image>
          <Text
            style={{
              color: 'white',
              fontSize: 40,
              marginLeft: 20,
              fontWeight: 'bold',
            }}>
            About ?
          </Text>
        </ImageBackground>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity>
          <Text style={styles.Textstyle}> Privacy Policy </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Textstyle}> Terms of Use </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Textstyle}> Open source libraries </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.Textstyle}> App updates </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  Textstyle: {
    color: 'black',
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  backgroundstyle: {
    height: 200,
    width: 400,
  },
  Imagestyle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    marginTop: 40,
    marginLeft: 35,
  },
});
