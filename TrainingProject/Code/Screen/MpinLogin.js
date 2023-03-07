import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { saveUserDetail } from '../Redux/Login/LoginAction';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import { mpinLoginAction } from '../Redux/Mpin/MpinAction';
import { AuthContext } from '../Navigation/Context';

const MpinLogin = ({ navigation, sucess, mpinLoginAction, resetLoginData, saveUserDetail, notificationList, addDeviceInfo, client, message, mpin, access_token, userEmail, selectedProject, selectedSubscripion, selectProject, selectSubscription }) => {
    const { login } = useContext(AuthContext)
    const [mpin1, setMpin1] = useState('');
    const [mpin2, setMpin2] = useState('');
    const [mpin3, setMpin3] = useState('');
    const [mpin4, setMpin4] = useState('');
    const [isAccountActive, setAccountActive] = useState(false);
    const loginClicked = () => {
        const mpin = mpin1 + mpin2 + mpin3 + mpin4
        const headers = {
            'uid': userEmail,
            'client': client,
            'access-token': access_token,
            "content-type": "application/json",
        }
        var body = { 'mpin': mpin }
        if (mpin.length > 0) {
            axios
                .post('https://qanew.lawclerk.p2klabs.com/api/v1/attorney/sign_in_mpin', body, { headers: headers })
                .then((res) => {
                    if (!!res.data.success) {
                        saveUserDetail(res)
                        {login()}
                        console.log(res);
                    }
                    else {
                        Alert.alert('Please enter valid mPIN')
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
                        Alert.alert('Invalid Pin')
                    }
                })
        } else { Alert.alert('Please enter mPIN') }
    }
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Image style={styles.img} source={require('../Assests/Images/imdb.png')} />
                <Text style={styles.mpinText}>
                    Login With MPIN
                </Text>
                <View style={styles.mpinbox}>
                    <TextInput
                        style={styles.mpinTextbox}
                        onChangeText={(text) => setMpin1(text)}
                        maxLength={1}
                        keyboardType='number-pad'
                    />
                    <TextInput
                        style={styles.mpinTextbox}
                        onChangeText={(text) => setMpin2(text)}
                        maxLength={1}
                        keyboardType='number-pad'
                    />
                    <TextInput
                        style={styles.mpinTextbox}
                        onChangeText={(text) => setMpin3(text)}
                        maxLength={1}
                        keyboardType='number-pad'
                    />
                    <TextInput
                        style={styles.mpinTextbox}
                        onChangeText={(text) => setMpin4(text)}
                        maxLength={1}
                        keyboardType='number-pad'
                    />
                </View>
                <Text style={styles.forgot}>
                    Forgot Mpin Pin*
                </Text>
                <TouchableOpacity style={styles.btn} onPress={() => loginClicked()}>
                    <Text style={styles.done}>
                        LOGIN
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
        backgroundColor: '#FFFFFF',
        marginTop: 200,
        borderRadius: 10,
        width: 350

    },
    mpinText: {
        fontWeight: '500',
        color: 'black',
        fontSize: 30,
        marginTop: 12,
        alignSelf: 'center',
        marginBottom: 30

    },
    mpinbox: {
        marginTop: 14,
        marginLeft: 30,
        marginRight: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    mpinTextbox: {
        height: 38,
        width: 51,
        borderWidth: 0.5,
        backgroundColor: '#f7f7f7',
        color: '#5e5e5e',
        textAlign: 'center',
        fontSize: 16,
        padding: 2,
        color: '#3a4b5b'
    },
    forgot: {
        textAlign: 'right',
        marginRight: 20,
        marginTop: 5,
        fontWeight: '500',
        color: 'red'
    },
    img: {
        height: 65,
        width: 250,
        marginTop: 12,
        alignSelf: 'center',
        borderRadius: 15
    },
    btn: {
        backgroundColor: '#c5b15d',
        width: "100%",
        height: 60,
        marginTop: 177,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    done: {
        fontSize: 20,
        fontWeight: '500',
        textTransform: 'uppercase',
        color: 'white'
    },
})
const mapStateToProps = (state) => {
    return {
        mpin: state.mpinReducer.mpin,
        message: state.mpinReducer.message,
        sucess: state.mpinReducer.sucess,
        access_token: state.Login.access_token,
        userEmail: state.Login.email,
        client: state.Login.client,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        mpinLoginAction: (mpin) => dispatch(mpinLoginAction(mpin)),
        saveUserDetail: (res) => dispatch(saveUserDetail(res)),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MpinLogin)