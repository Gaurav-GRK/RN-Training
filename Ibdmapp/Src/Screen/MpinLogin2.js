/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-shadow */
/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import React, { useContext, useState } from 'react';
import { saveUserDetail } from '../Redux2/Login/LoginAction';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import { mpinLoginAction } from '../Redux2/Mpin/MpinAction';
import { AuthContext } from '../Context/AuthContext';

const MpinLogin2 = ({ navigation, sucess, mpinLoginAction, resetLoginData, saveUserDetail, notificationList, addDeviceInfo, client, message, mpin, access_token, userEmail, selectedProject, selectedSubscripion, selectProject, selectSubscription }) => {
  const { login } = useContext(AuthContext);
  const [mpin1, setMpin1] = useState('');
  const [mpin2, setMpin2] = useState('');
  const [mpin3, setMpin3] = useState('');
  const [mpin4, setMpin4] = useState('');
  const ref = React.useRef();
  const ref2 = React.useRef();
  const ref3 = React.useRef();
  const [isAccountActive, setAccountActive] = useState(false);
  const loginClicked = () => {
    const mpin = mpin1 + mpin2 + mpin3 + mpin4;
    const headers = {
      'uid': userEmail,
      'client': client,
      'access-token': access_token,
      "content-type": "application/json",
    };
    var body = { 'mpin': mpin };
    if (mpin.length > 0) {
      axios
        .post('https://qanew.lawclerk.p2klabs.com/api/v1/attorney/sign_in_mpin', body, { headers: headers })
        .then((res) => {
          if (res.data.success) {
            saveUserDetail(res);
            { login(); }
            console.log(res.data);
          }
          else {
            Alert.alert('Please enter valid mPIN');
          }
        })
        .catch((error) => {
          if (error?.response?.data?.message == "Session Expired") {
            console.log(error);
            Alert.alert(
              "Session expired, please login again.",
            );
          }
          else {
            Alert.alert('Invalid Pin');
          }
        });
    } else { Alert.alert('Please enter mPIN'); }
  };
  return (

    <ScrollView style={{ backgroundColor: 'pink' }}>
      <SafeAreaView style={{ paddingBottom: 130 }}>
        {/* <View style={{ flex: 1, justifyContent: 'center', alignItems : 'center' }}> */}
        <View style={styles.innerBox}>
          <Image source={require('../../assets/Imdblogo.png')} style={styles.logoImage} />
          <Text style={styles.setMpinText}>Login with mPIN</Text>
          <View style={styles.mpinTextView}>
            <TextInput
              style={styles.mpinTextBox}
              placeholder=""
              onChangeText={(text) => {
                if (text.length === 1) {
                  ref.current.focus();
                }
                setMpin1(text);
              }}
              maxLength={1}
              keyboardType="number-pad"
              returnKeyType="done"
            />
            <TextInput
              ref={ref}
              style={styles.mpinTextBox}
              placeholder=""
              onChangeText={(text) => {
                if (text.length === 1) {
                  ref2.current.focus();
                }
                setMpin2(text);
              }}
              maxLength={1}
              keyboardType="number-pad"
              returnKeyType="done"
            />
            <TextInput
              ref={ref2}
              style={styles.mpinTextBox}
              placeholder=""
              onChangeText={(text) => {
                if (text.length === 1) {
                  ref3.current.focus();
                }
                setMpin3(text);
              }}
              maxLength={1}
              keyboardType="number-pad"
              returnKeyType="done"
            />
            <TextInput
              ref={ref3}
              style={styles.mpinTextBox}
              placeholder=""
              onChangeText={setMpin4}
              maxLength={1}
              keyboardType="number-pad"
              returnKeyType="done"
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText} onPress={() => { }}>
              Forgot your mPIN?
            </Text>
          </TouchableOpacity>
          <View style={{ height: 1, marginLeft: 30, backgroundColor: '#efefef', marginTop: 20, marginRight: 30 }} />
          <TouchableOpacity style={styles.loginButton} onPress={() => loginClicked()}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>


  );
};

const styles = StyleSheet.create({
  innerBox: {
    backgroundColor: '#ffffff',
    marginTop: 130,
    // marginBottom : 130,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 16,
  },
  logoImage: {
    marginTop: 38,
    marginLeft: 58,
    marginRight: 58,
    height: 110,
    alignSelf: 'center',
    borderRadius: 10,
  },
  arrowImage: {
    marginLeft: 8,
    marginTop: 23,
    height: 16,
    width: 16,
  },
  forgotPasswordText: {
    fontSize: 11,
    width: 170,
    height: 20,
    color: '#c5b15d',
    textAlign: 'right',
    marginTop: 12,
    marginLeft: 30,
    marginRight: 30,
    width: Dimensions.get('screen').width - 100,
  },
  loginButton: {
    backgroundColor: '#9fbcd1',
    width: Dimensions.get('screen').width - 40,
    height: 60,
    marginTop: 177,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  setMpinText: {
    fontSize: 12,
    color: '#5e5e5e',
    marginTop: 59,
    marginLeft: 30,
    fontWeight: 'bold',
  },
  loginIdText: {
    fontSize: 12,
    width: 113,
    color: '#5e5e5e',
    marginLeft: 30,
    marginTop: 23,
  },
  mpinTextBox: {
    height: 38,
    width: 51,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    backgroundColor: '#f7f7f7',
    color: '#5e5e5e',
    textAlign: 'center',
    fontSize: 16,
    padding: 2,

  },
  mpinTextView: {
    marginTop: 14,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
const mapStateToProps = (state) => {
  return {
    mpin: state.mpinReducer.mpin,
    message: state.mpinReducer.message,
    sucess: state.mpinReducer.sucess,
    access_token: state.Login.access_token,
    userEmail: state.Login.email,
    client: state.Login.client,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    mpinLoginAction: (mpin) => dispatch(mpinLoginAction(mpin)),
    saveUserDetail: (res) => dispatch(saveUserDetail(res)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MpinLogin2);
