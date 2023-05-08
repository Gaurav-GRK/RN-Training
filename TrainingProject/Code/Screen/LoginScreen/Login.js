import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image, Alert, Dimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Navigation/Context'
import { connect } from 'react-redux'
import { LoginAction } from '../../Redux/Login/LoginAction'
function Login({ navigation, userEmail, LoginAction }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useContext(AuthContext)
    const onLogin = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(email).toLowerCase())) {
            if (password.length > 0) {
                LoginAction(email, password, () => {
                    navigation.navigate('MpinLogin')
                })
            } else {
                Alert.alert('Please enter Password')
            }
        } else {
            email.length == 0 ? Alert.alert('Please enter email') : Alert.alert('Please enter valid email')
        }
    }
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
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forgot}>
                        Forgot Password*
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => { onLogin() }}>
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



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        flex: 1,
        alignItems: 'center',
    },
    container1: {
        backgroundColor: '#ffffff',
        width: Dimensions.get('screen').width - 40,
        marginTop: 130,
        // marginBottom : 130,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 16,
        minHeight: 101

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
        height: 38,
        borderWidth: 1,
        padding: 10,
        borderColor: '#e6e6e6',
        backgroundColor: '#f7f7f7',
        marginTop: 13,
        marginLeft: 30,
        marginRight: 30,
        color: '#5e5e5e'
    },
    email: {
        marginLeft: 30,
        color: 'black', marginTop: 4
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
    }
}
const mapDisPatchToProps = (dispatch) => {
    return {
        LoginAction: (email, password, callback) => dispatch(LoginAction(email, password, callback)),
    }
}
export default connect(mapStateToProps, mapDisPatchToProps)(Login)