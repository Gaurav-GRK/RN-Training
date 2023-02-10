import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const ForgotPassword = () => {
    return (
        <View >
            <Text style={styles.forgot}>
                Forgot Password
            </Text>
            <Text style={styles.data}>
                Please, enter your email address. You will recieve
                a link to create a new password via email.
            </Text>
            <Text style={styles.email}>
                Email
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Email Address'
                onChangeText={(Data) => setEmail(Data)}
            />
            <TouchableOpacity style={styles.btn} >
                <Text style={styles.done}>
                    Send
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    forgot: {
        color: 'blue',
       alignSelf:'center',
        marginTop: 30,
        fontSize: 35,
        fontWeight: '700',
    },
    input: {
        height: 45,
        margin: 5,
        padding: 12,
        borderRadius: 4,
        backgroundColor: '#E6E6E6',
        width: 380,
        marginLeft: 15,
        marginRight: 20,
        borderWidth: 1
    },
    email: {
        marginLeft: 20,
        color: 'blue',
        marginTop: 12

    },
    data: {
        marginTop: 90,
        color: 'black',
        marginLeft: 20,
        marginRight: 25,
        fontSize: 15
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
    
})