import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={require('../Assets/Images/imdb.png')}
      style={styles.background}>
      <View>
        <View style={styles.cardContainer}>
          <Text style={styles.title}>IMDB Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              console.log(
                'Sign up with email:',
                email,
                'and password:',
                password,
              )
            }>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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

  cardContainer: {
    backgroundColor: 'white',
    padding: 38,
    // paddingHorizontal:63,
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
  title: {
    fontSize: 32,
    marginVertical: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 5,
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default SignUpPage;
