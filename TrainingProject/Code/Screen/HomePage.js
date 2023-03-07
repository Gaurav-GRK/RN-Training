import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { LoginAction } from '../Redux/Login/LoginAction'

const HomePage = ({ first_name, userEmail, client, access_token }) => {
    const [key, setKey] = useState('')
    const nameContainer = () => {
        return (
            <View>
                <Text style={styles.nameText}>
                    {'Hello, ' + first_name}
                </Text>
            </View>
        )
    }
    return (
        <SafeAreaView>
            <ScrollView
                key={key}
            >
                {nameContainer()}
            </ScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    nameText: {
        fontWeight: 'bold',
        color: '#C5B15D',
        fontSize: 16,
        textAlign: 'left',
        marginTop: 35,
        marginLeft: 20,
        marginBottom: 10,
    }
})
const mapStateToProps = state => {
    return {
        client: state.Login.client,
        userEmail: state.Login.email,
        access_token: state.Login.access_token,
        onProbation: state.Login.onProbation,
        hasConflicts: state.Login.hasConflicts,
        isInactive: state.Login.isInactive,
        first_name:state.Login.first_name
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loginAction: (email, password) => dispatch(loginAction(email, password)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);