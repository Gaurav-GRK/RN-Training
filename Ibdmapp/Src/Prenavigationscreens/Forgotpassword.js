/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,ImageBackground,Image,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView, withSafeAreaInsets } from 'react-native-safe-area-context';

const Forgotpassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  return (
    <ImageBackground source={require('../../assets/ImdbBackground.jpeg')} style={styles.background} >
    <SafeAreaView>
      <View style={styles.card}>
       <View>
        <Image source={require('../../assets/Imdblogo.png')} styles={{height:10,width:40}} ></Image>
       </View>
        <View style={styles.container1}>
          <Text style={styles.text}>Forgot Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Email Address"
              autoCorrect={false}
              value={email}
              onChangeText={actualdata => setEmail(actualdata)}
            />
            </View>
            <TouchableOpacity
              style={styles.botton}
              onPress={() =>navigation.navigate('Home')}><Text
              style={styles.bottonText}>Send</Text>
            </TouchableOpacity>
          </View>

    </SafeAreaView>
    </ImageBackground>
  );
};

export default Forgotpassword;
const styles = StyleSheet.create({
 card:{
     backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'brown',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    width: '80%',
    alignItems: 'center',
  },
   background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    borderColor: 'white',
    borderBottomWidth: 20,
    borderTopWidtnig: 20,
    borderRadius: 0,
    borderLeftWidth: 20,
    borderRightWidth: 20,
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'white',

  },
  textInput: {
    padding: 10,
    marginLeft: 0,
    width:260,
    borderWidth:1,
    marginTop:10,
  },

  botton: {

    backgroundColor: '#FF4500',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    width: '80%',
  },
  bottonText:{
    marginLeft:20,
    marginRight:20,
    color:'white',
    fontSize:20,
    fontWeight:'bold',

  },
});
