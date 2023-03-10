import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";

const HomePage = () => {
    const [show, setShow] = useState(false)
    const showList = () => {
        setShow(!show)
    }
    const renderList = () => {
        return (
            <View>
                <View style={styles.barIcon} />
                <Text style={styles.mainText}>
                    What Would you Like to do?
                </Text>
                <TouchableOpacity>
                    <View style={styles.container4}>
                        <Image source={require('../Assests/Images/filemanager.png')} style={styles.imgfile} />
                        <Text style={styles.newProjectText}>
                            New Project
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.container4}>
                        <Image source={require('../Assests/Images/Team.png')} style={styles.imgfile} />

                        <Text style={styles.newProjectText}>
                            Build a new Team
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.container4}>
                        <Image source={require('../Assests/Images/hiring.png')} style={styles.imgfile} />
                        <View>
                            <Text style={styles.HireText1}>
                                Hire a Subscription
                            </Text>
                            <Text style={styles.HireText}>
                                Virtual Associate
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    const dropDownList = () => {
        return (
            <View>
                <Modal
                    onBackdropPress={() => setShow(false)}
                    onBackButtonPress={() => setShow(false)}
                    isVisible={show}
                    swipeDirection='down'
                    onSwipeComplete={showList}
                    style={styles.modal}
                >
                    <View style={styles.modalContent}>
                        <View>
                            {renderList()}
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
    const TabList = () => {
        return (
            <View>
                <TouchableOpacity onPress={() => showList()}>
                    <ImageBackground source={require('../Assests/Images/homeback.png')} style={styles.imgbackground}>
                        {dropDownList()}
                        <View style={styles.container1}>
                            <Image source={require('../Assests/Images/post.png')} style={styles.img} />
                            <Text style={styles.postText}>
                                POST
                            </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={styles.container2}>
                    <TouchableOpacity>
                        <ImageBackground source={require('../Assests/Images/homeback.png')} style={styles.imgbackground}>
                            <View style={styles.container1}>
                                <Image source={require('../Assests/Images/notifications.png')} style={styles.img} />
                                <View>
                                    <Text style={styles.reviewText}>
                                        REVIEW
                                    </Text>
                                    <Text style={styles.notificationText}>
                                        NOTIFICATIONS
                                    </Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity>
                        <ImageBackground source={require('../Assests/Images/homeback.png')} style={styles.imgbackground}>
                            <View style={styles.container1}>
                                <Image source={require('../Assests/Images/Vector.png')} style={styles.img} />
                                <View>
                                    <Text style={styles.projectText}>
                                        PROJECT
                                    </Text>
                                    <Text style={styles.ApplicantsText}>
                                        APPLICANTS
                                    </Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View>
            <Text style={styles.name}>
                Hello,Varun
            </Text>
            <View style={styles.container}>
                {TabList()}
            </View>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    name: {
        color: 'green',
        fontSize: 20,
        marginTop: 50,
        marginLeft: 38,
        fontWeight: 'bold'
    },
    container: {
        alignItems: 'center',
        padding: 20,
    },
    imgbackground: {
        height: 90,
        width: 350
    },
    img: {
        marginLeft: 10,
        marginTop: 20
    },
    container1: {
        flexDirection: 'row',
        padding: 10
    },
    postText: {
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: 25,
        color: 'white',
        marginLeft: 66,
        marginTop: 20,
    },
    container2: {
        marginTop: 15
    },
    reviewText: {
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: 25,
        color: 'white',
        marginLeft: -12
    },
    notificationText: {
        fontWeight: '700',
        fontSize: 25,
        color: 'white',
        marginLeft: 70
    },
    projectText: {
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: 25,
        color: 'white',
        marginLeft: 30
    },
    ApplicantsText: {
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: 25,
        color: 'white',
        marginLeft: 60
    },
    modalContent: {
        backgroundColor: 'white',
        paddingTop: 12,
        paddingHorizontal: 12,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        minHeight: 280,
        paddingBottom: 20
    },
    center: {
        display: 'flex',
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0
    },
    mainText: {
        color: 'black',
        marginTop: 25,
        marginLeft: 15,
        fontWeight: 'bold'
    },
    imgfile: {
        height: 50,
        width: 50,
        backgroundColor: 'white'
    },
    container4: {
        flexDirection: 'row',
        marginTop: 15,
        backgroundColor: 'lightgrey',
    },
    newProjectText: {
        color: 'brown',
        marginLeft: 40,
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 15
    },
    HireText: {
        color: 'brown',
        fontWeight: 'bold',
        marginLeft: 40,

    },
    HireText1: {
        color: 'brown',
        fontWeight: 'bold',
        marginLeft: 40,
        marginTop: 8
    },
    barIcon:{
        width: 70,
        height: 5,
        borderRadius: 3,
        backgroundColor: '#bbb',
        alignSelf:"center"
    }
})