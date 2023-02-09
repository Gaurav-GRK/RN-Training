import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
const CustomDrawer = (props, { navigation }) => {
    return (
        <>
            <DrawerContentScrollView {...props} >
                <View style={styles.border}>
                    <View style={styles.drawer}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                            <Image source={require('../Assests/Images/bitmoji.png')} style={styles.logoImage} />
                        </TouchableOpacity>
                        <Text style={styles.logoText}>
                            Varun
                        </Text>
                    </View>
                    <Text style={styles.text}>
                        Varunsinghal13200@gmail.com
                    </Text>
                </View>
                <DrawerItemList{...props} />
            </DrawerContentScrollView>
            <View style={styles.logout}>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../Assests/Images/logout.jpg')} style={styles.img} />
                        <Text style={styles.logtext}>
                            Logout
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    logout: {
        padding: 20,
        borderTopWidth: 1,
    },
    logtext: {
        fontSize: 25,
        marginLeft: 10,
        color: 'black',
        marginTop: 3,
    },
    img: {
        height: 30,
        width: 30,
        marginTop: 5
    },
    drawer: {
        marginTop: 15,
        flexDirection: 'row'
    },
    logoImage: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 10
    },
    logoText: {
        fontSize: 20,
        marginLeft: 12,
        color: 'black',
        alignSelf: 'center',
        fontWeight: '700'
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    text: {
        marginBottom: 12,
        marginLeft: 15,
        color: 'black',
        fontSize: 13
    }
})