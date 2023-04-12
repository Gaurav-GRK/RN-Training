import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ScreenB = () => {
    const header = () => {
        return (
            <Text style={styles.header}>
                Match with Better Opportunities!
            </Text>
        )
    }
    const subHeader = () => {
        return (
            <View>
                <Text style={styles.subHeadText}>
                    New Feature
                </Text>
                <View style={styles.subHeader}>
                    <Text style={styles.subHeadText1}>
                        Profile Builder
                    </Text>
                    <Text style={styles.subHeadText2}>
                        March 27,2023
                    </Text>
                </View>
            </View>
        )
    }
    const innerText = () => {
        return (
            <View>
                <View style={styles.text}>
                    <Text style={styles.innerText}>
                        A More robust profile builder is coming.{'\n'}
                        Show off your experiences and{'\n'}
                        accomplishments.
                    </Text>
                </View>
                <Text style={styles.subHeadText}>
                    *Available only on Desktop*
                </Text>
            </View>
        )
    }
    const gotIt = () => {
        return (
            <View>
                <TouchableOpacity style={styles.gotItbtn}>
                    <Text style={styles.gotItText}>
                        GOT IT
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <View>
                    <TouchableOpacity style={styles.crossbtn}>
                        <Text style={styles.crossText}>
                            X
                        </Text>
                    </TouchableOpacity>
                </View>
                {header()}
                {subHeader()}
                {innerText()}
                {gotIt()}
            </View>
        </View>
    )
}

export default ScreenB

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#888888',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container1: {
        backgroundColor: '#FFFFFF',
        height: 366,
        width: 345
    },
    subHeader: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    crossbtn: {
        height: 37,
        backgroundColor: '#C5B25C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        marginRight: 12,
        width: 37,
        top: 12,
        alignSelf: 'flex-end'
    },
    crossText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerText: {
        fontSize: 15,
        marginTop: 6,
        color: '#888888',
        textAlign: 'center',
    },
    header: {
        fontSize: 20,
        color: '#888888',
        alignSelf: 'center',
        top: 24,
    },
    subHeadText: {
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 28,
        color: '#888888'
    },
    subHeadText1: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#888888'

    },
    subHeadText2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#888888',
        textDecorationLine: 'underline',
        marginLeft: 4
    },

    gotItbtn: {
        height: 37,
        backgroundColor: '#C5B25C',
        marginTop: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        width: 261
    },
    gotItText: {
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#5E5E5E',
        alignSelf: 'center'
    },
})