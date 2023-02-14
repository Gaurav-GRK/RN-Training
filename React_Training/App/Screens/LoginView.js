import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';
import {AuthContext} from '../Navigator/Context';
const LoginPage = ({navigation}, props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);

  return (
    <ImageBackground
      source={require('../Assets/Images/imdb.png')}
      style={styles.background}>
      <View style={styles.card}>
        <View>
          <Image
            source={require('../Assets/Images/imdblogo.png')}
            resizeMode="contain"
          />
        </View>
        {/* <Text style={styles.label}>IMDb Login</Text> */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            login();
          }}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.forgetPassword}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUp}
          onPress={() => navigation.navigate('SignupScreen')}>
          <Text>New to IMDb?</Text>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
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
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 10,
    fontSize: 18,
    width: '80%',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#FF4500',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  forgetPassword: {
    marginTop: 20,
  },
  forgetPasswordText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'gray',
  },
  signUp: {
    marginTop: 20,
  },
  signUpText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FF4500',
    fontWeight: 'bold',
  },
});

export default LoginPage;
