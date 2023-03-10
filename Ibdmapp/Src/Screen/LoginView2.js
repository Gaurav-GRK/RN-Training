/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable no-lone-blocks */

/* eslint-disable prettier/prettier */
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
import { LoginAction } from '../Redux2/Login/LoginAction';
import { connect, useDispatch } from 'react-redux';

const LoginView2 = ({ navigation, userEmail, loginAction }, props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();


  const loginClicked = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
      if (password.length > 0) {
        loginAction(email, password, () => {
          navigation.navigate('MpinLogin2');
        });
      } else {
        alert('Please enter Password');
      }
    } else {
      email.length == 0
        ? alert('Please enter email')
        : alert('Please enter valid email');
    }
    {/*
      useEffect(() => {
    checkAndNavigate();
  }, [first_name])

  const checkAndNavigate = () => {
        if (first_name?.length > 0) {
      if (mpin_enabled) {
        navigation.navigate('MpinLogin')
      } else {
        navigation.navigate('MpinSetupView')
      }
    }
  }*/}
  };
  return (
    <ImageBackground
      source={require('../../assets/ImdbBackground.jpeg')}
      style={styles.background}>
      <SafeAreaView>
        <View style={styles.cardStyle}>
          <View>
            <Image source={require('../../assets/Imdblogo.png')} style={{ height: 150, width: 300, borderRadius: 20 }} />
          </View>
          <Text style={styles.text}> LogIn </Text>
          <View style={{ alignItems: 'flex-start' }}>
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
          </View>
          <TouchableOpacity
            style={styles.button}
            color="blue"
            onPress={() => {
              loginClicked();
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles}>Don't have remember Password?</Text>
          <TouchableOpacity
            styles={styles.forgetStyle}
            onPress={() => navigation.navigate('Forgotpassword')}>
            <Text style={styles}> Forgot Password </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};



const styles = StyleSheet.create({
  cardStyle: {
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
    marginBottom: 5,
  },
  textInput: {
    padding: 10,
    width: 260,
    paddingRight: 0,
    marginBottom: 10,
    marginLeft: 0,
    borderWidth: 1,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FF4500',
    padding: 10,
    marginTop: 15,
    marginBottom: 10,
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
    marginRight: 20,
    marginLeft: 20,
  },
  forgetStyle: {
    marginTop: 20,
  },
});
const mapStateToProps = (state) => {
  return {
    first_name: state.Login.first_name,
    last_name: state.Login.last_name,
    userEmail: state.Login.email,
    client: state.Login.client,
    access_token: state.Login.access_token,
    sucess: state.Login.sucess,
    stateValue: state.Login.stateValue,
    mpin_enabled: state.Login.mpin_enabled,
  };
};
const mapDisPatchToProps = (dispatch) => {
  return {
    loginAction: (email, password, callback) => dispatch(LoginAction(email, password, callback)),
  };
};
export default connect(mapStateToProps, mapDisPatchToProps)(LoginView2);
