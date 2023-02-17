/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, { useState, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../Context/AuthContext';



const Login = ({ navigation },props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  return (
    <ImageBackground source={require('../../assets/ImdbBackground.jpeg')} style={styles.background} >
    <SafeAreaView>

      <View style={styles.cardStyle}>
      <View>
        <Image source={require('../../assets/Imdblogo.png')} ></Image>
      </View>
        
          <Text style={styles.text}> LogIn </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Email Address"
              autoCorrect={false}
              value={email}
              onChangeText={actualdata => setEmail(actualdata)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              autoCorrect={false}
              value={password}
              secureTextEntry={true}
              onChangeText={actualdata => setPassword(actualdata)}
            />
            <TouchableOpacity style={styles.button}
              color="blue"
              onPress={() => { login();}} >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
          <Text style={styles.text3}>Don't have remember Password?</Text>
          <TouchableOpacity styles={styles.forgetStyle} onPress={() => navigation.navigate('Forgotpassword')}>
            <Text style={styles}>  Forgot Password </Text>
          </TouchableOpacity>
        </>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;
const styles = StyleSheet.create({
  cardStyle:{
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

  text: {
    fontSize: 50,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
  textInput: {
    padding: 10,
    marginLeft: 0,

  },
   background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
   button: {
    backgroundColor: '#FF4500',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    width: '80%',
  },
  forgetPasswordText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'gray',

},
 buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginRight:20,
    marginLeft:20,
 },
  forgetStyle: {
    marginTop: 20,
},
},
);
