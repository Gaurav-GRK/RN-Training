/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView, withSafeAreaInsets} from 'react-native-safe-area-context';

const Forgotpassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.text}>Forgot Password</Text>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Email Address"
              autoCorrect={false}
              value={email}
              onChangeText={actualdata => setEmail(actualdata)}
            />
            <Button
              style={styles}
              title="Send"
              color="green"
              onPress={()=>  navigation.navigate('Drawernevigation')}

            />
            <Text>{message}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Forgotpassword;
const styles = StyleSheet.create({
  container: {
    borderColor: 'pink',
    borderBottomWidth: 80,
    borderTopWidth: 20,
    borderRadius: 0,
    borderLeftWidth: 35,
    borderRightWidth: 35,
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
    borderBottomColor: 'white',
    borderBottomWidth: 10,
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
});
