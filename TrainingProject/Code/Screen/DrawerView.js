import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { toggleSideMenu, toggleHomeAddSheet } from '../Redux/Picker/Action'
import Animated from 'react-native-reanimated'
import { connect } from 'react-redux';
import { AuthContext } from '../Navigation/Context';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
const DrawerView = ({ showSideMenu, toggleSideMenutoggle, HomeAddSheet }) => {
    const { logout } = useContext(AuthContext)
    const [key, setKey] = React.useState(1);
    const nav = useNavigation();
    useEffect(() => {
        setKey(key + 1);
    }, [showSideMenu]);
    const LogoClicked = () => {
        nav.navigate('HomePage');
        toggleSideMenu(false);
    };
    const getRowContainer = () => {
        return (
            <View style={{ marginTop: 40, marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => nav.navigate('Home')}>
                    <View style={styles.imdbContainer}>
                        <Image source={require('../Assests/Images/imdb.png')} style={styles.imdbImg} />
                        <Text style={styles.imdbText}>
                            Imdb
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => nav.navigate('Profile')}>
                    <View style={styles.imdbContainer1}>
                        <Image source={require('../Assests/Images/profile.png')} style={styles.imdbImg} />
                        <Text style={styles.imdbText}>
                            Profile
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => nav.navigate('AboutUs')}>
                    <View style={styles.imdbContainer2}>
                        <Image source={require('../Assests/Images/aboutus.jpg')} style={styles.imdbImg} />
                        <Text style={styles.imdbText}>
                            AboutUs
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    const logoutAction = () => {
        return (
            <View style={styles.logout}>
                <TouchableOpacity onPress={() => logout()}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../Assests/Images/logout.jpg')} style={styles.img} />
                        <Text style={styles.logtext}>
                            Logout
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <Animated.View style={{
            ...styles.container,
            transform: [{ translateX: showSideMenu ? 0 : -0 }],
        }}>
            <View style={styles.subContainer}>
                <ScrollView>
                    <View style={styles.border}>
                        <View style={styles.drawer}>
                            <TouchableOpacity onPress={() => LogoClicked()}>
                                <Image source={require('../Assests/Images/bitmoji.png')} style={styles.logoImage} />
                            </TouchableOpacity>
                            <Text style={styles.logoText}>
                                Varun
                            </Text>
                            <TouchableOpacity onPress={() => nav.navigate('HomePage')}>
                                <Image
                                    source={require('../Assests/Images/arrowIcon.png')}
                                    style={styles.arrow}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {getRowContainer()}
                </ScrollView>
                {logoutAction()}
            </View>
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    logout: {
        padding: 20,
        borderTopWidth: 1,
    },
    logtext: {
        fontSize: 25,
        marginLeft: 10,
        color: 'black',
        marginBottom: 45
    },
    img: {
        height: 30,
        width: 30,
        marginTop: 1
    },
    imdbContainer2: {
        marginLeft: 4,
        flexDirection: 'row',
        marginTop: 35
    },
    imdbContainer1: {
        marginLeft: 4,
        flexDirection: 'row',
        marginTop: 35
    },
    imdbText: {
        color: 'black',
        marginLeft: 15,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '500'
    },
    imdbImg: {
        width: 30,
        height: 30,
    },
    imdbContainer: {
        marginLeft: 4,
        flexDirection: 'row'
    },
    arrow: {
        height: 25,
        width: 25,
        marginLeft: 100,
        marginTop: 35
    },
    rowText: {
        fontSize: 13,
        textAlign: 'left',
        marginLeft: 13,
        color: '#000000',
        fontWeight: '600',
    },
    rowIcon: {
        height: 16,
        width: 16,
    },
    drawer: {
        marginTop: 25,
        flexDirection: 'row',
        marginLeft: 15,
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
    container: {
        position: 'absolute',
        flexGrow: 1,
        flex: 1,
        height: height,
        width: width,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    subContainer: {
        height: '100%',
        width: 320,
        backgroundColor: '#ffffff',
    },
})
const mapStateToProps = state => {
    return {
        showSideMenu: state.PickerReducer.showSideMenu,
        access_token: state.Login.access_token,
        client: state.Login.client,
        userEmail: state.Login.email,
        first_name: state.Login.first_name,
        last_name: state.Login.last_name,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        loginAction: (email, password) => dispatch(loginAction(email, password)),
        toggleSideMenu: (show, Blur) =>
            dispatch(toggleSideMenu(show, Blur)),
        toggleHomeAddSheet: (show, Blur) =>
            dispatch(toggleHomeAddSheet(show, Blur)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DrawerView);
