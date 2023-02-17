import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Navigation/Context'
const Login = ({navigation},props) => {
    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const {login} =useContext(AuthContext)
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.log}>
                    Log In
                </Text>
                <Text style={styles.email}>
                    Email
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Email Address'
                    placeholderTextColor={'grey'}
                    onChangeText={(Data) => setEmail(Data)}
                />
                <Text style={styles.email}>
                    Password
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor={'grey'}
                    onChangeText={(Data) => setPassword(Data)}
                />
                <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forgot}>
                        Forgot Password*
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={()=>{login()}}>
                    <Text style={styles.done}>
                        Login
                    </Text>
                </TouchableOpacity>
                <Text style={styles.sign}>
                    ____________________ or Sign In with ___________________
                </Text>
                <View style={styles.btnsign}>
                    <View style={styles.btnSecondary}>
                        <TouchableOpacity>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>
                                Facebook
                            </Text>
                            <Image style={styles.btnImage} source={require('../../Assests/Images/Facebook-logo.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: 10 }}></View>
                    <View style={styles.btnSecondary1}>
                        <TouchableOpacity>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>
                                Google
                            </Text>
                            <Image style={styles.btnImage} source={require('../../Assests/Images/Google.png')} />
                        </TouchableOpacity></View>
                </View>
            </View>
            <View style={styles.text5}>
                <Text style={styles.acc}>
                    Don't have an account?
                </Text>
                <TouchableOpacity >
                    <Text style={styles.signup}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        flex: 1,
        alignItems: 'center',

    },
    container1: {
        backgroundColor: '#FFFFFF',
        marginTop: 90,
        borderRadius: 10,

    },
    log: {
        fontWeight: '500',
        color: 'black',
        fontSize: 35,
        marginTop: 12,
        alignSelf: 'center',
        marginBottom: 30

    },
    input: {
        height: 45,
        margin: 5,
        padding: 12,
        borderRadius: 4,
        backgroundColor: '#E6E6E6',
        width: 320,
        marginLeft: 15,
        marginRight: 20
    },
    email: {
        marginLeft: 16,
        color: 'black'
    },
    btn: {
        height: 56,
        backgroundColor: '#C5B15D',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 12,
        marginRight: 20,
        borderRadius: 12
    },
    done: {
        fontSize: 20,
        fontWeight: '500',
        textTransform: 'uppercase',
        color: 'white'
    },
    sign: {
        color: 'black',
        textAlign: 'center',
        marginTop: 15
    },
    btnImage: {
        width: 30,
        height: 30,
        marginLeft: 10
    },
    btnSecondary: {
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 15,
        borderColor: 'grey',
        marginLeft: 15,
    },
    btnSecondary1: {
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 15,
        borderColor: 'grey',
        marginRight: 15,
    },
    btnsign: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 12
    },
    text5:
    {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 8,
    },
    acc: {
        color: 'black',
        fontWeight: 'bold'
    },
    signup: {
        color: 'white',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginLeft: 10

    },
    forgot: {
        textAlign: 'right',
        marginRight: 20,
        marginTop: 5,
        fontWeight: '500',
        color: 'black'
    }
})