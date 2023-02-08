import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
const CustomDrawer = (props) => {
    return (
        <>
            <DrawerContentScrollView {...props}>
                <DrawerItemList{...props} />
            </DrawerContentScrollView>
            <View style={styles.logout}>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../Assests/Images/Logout2.png')} style={styles.img} />
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
        marginTop: 3
    },
    img: {
        height: 30,
        width: 30,
        marginTop: 5
    }
})