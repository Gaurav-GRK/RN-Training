import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  return (
    <ImageBackground
      source={require('../Assets/Images/imdb.png')}
      style={styles.background}>
      <View style={styles.background}>
        <View style={styles.card}>
          <Image
            source={require('../Assets/Images/imdblogo.png')}
            resizeMode="contain"
          />
          <Text style={styles.label}>
            Enter the email address associated with your IMDb account, then
            click Submit.
          </Text>
          <TextInput
            style={{...styles.input, textAlign: 'left'}}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
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
  card: {
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
  label: {
    //fontWeight: 'bold',
    marginTop: 20,
    fontSize: 14,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 75,
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
    paddingHorizontal: 15,
  },
});

export default ForgotPasswordScreen;
