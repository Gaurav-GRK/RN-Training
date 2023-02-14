/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState,useContext} from 'react';
import {SafeAreaView, withSafeAreaInsets} from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';


const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.text}> LogIn </Text>
          <View>
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
            <Button
              style={styles}
              title="Login"
              color="blue"
              onPress={() =>{login();}}/>
              {/*onPress={() =>navigation.navigate('ImdbHomescreen')}*/}
          </View>
        </View>
        <Text style={styles.text2}>
          ____________ or Sign in with ______________
        </Text>
        <View style={styles.text5}>
          <Text style={styles.text3}>Don't have remember Password?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Forgotpassword')}>
            <Text style={styles.text4}>  Forgot Password </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    borderColor: 'green',
    borderBottomWidth: 80,
    borderTopWidth: 20,
    borderRadius: 0,
    borderLeftWidth: 35,
    borderRightWidth: 35,
    marginTop:100,
  },
  container1: {
    borderColor: 'white',
    borderBottomWidth: 20,
    borderTopWidtnig: 20,
    borderRadius: 0,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    marginTop:30,
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
    borderBottomColor: 'white',
    borderBottomWidth: 10,
    borderColor: 'black',
  },

  botton: {
    flex: 1,
    backgroundColor: 'transparent',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
  },
  text2: {
    textAlign: 'center',
    fontSize: 15,
    backgroundColor: 'white',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 30,
    borderColor: 'white',
    borderTopWidth: 30,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    backgroundColor: 'white',
  },
  button2: {
    width: '40%',
    height: 40,
  },
  text3: {
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
  },
  text4: {
    color: 'white',
    fontSize: 15,
  },
  text5: {
    fontSize:3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'blue',
  },

});
