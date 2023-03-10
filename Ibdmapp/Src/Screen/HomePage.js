/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import Modal from 'react-native-modal';


const HomePage = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles}>
    <View style={{backgroundColor:'white',borderBottomWidth:1,}}>
        <View style={styles.BtnStyle}>
          <TouchableOpacity onPress={toggleModal}>
            <Image
              source={require('../../assets/TabbarIcons/SortList.png')}
              style={{height: 40, width: 40}}></Image>
            {/*<Text style={styles.BtnTextStyle}>SortList</Text>*/}
          </TouchableOpacity>

          <Modal
            isVisible={isModalVisible}
            onBackButtonPress={() => setModalVisible(false)}
            onBackdropPress={() => setModalVisible(false)}
            swipeDirection="down"
            onSwipeComplete={() => toggleModal}
            transparent={true}
            style={{alignSelf: 'center',justifyContent:'flex-end'}}>
            <View style={{}}>
              <View style={styles.ModalContainer}>
              <View ><Text style={{alignSelf:'center',fontSize:30,color:'black'}}>_________</Text></View>
                <Text
                  style={{color: 'red', alignSelf: 'center', marginTop: 20}}>
                  Hello ! how are you
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('List')}>
                  <Text style={styles.ModalBtnTextStyle}>List of Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Text style={styles.ModalBtnTextStyle}>List of Dogs</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('FilterList')}>
                  <Text style={styles.ModalBtnTextStyle}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('DogList1')}>
                  <Text style={styles.ModalBtnTextStyle}>About</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
      <ScrollView>
        <Text style={styles.text}>Hello,Abhishek</Text>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <ImageBackground
              source={require('../../assets/Homepageimages/backgroundCard.png')}
              style={styles.backgroundstyle}>
              <View>
                <Text
                  style={{
                    fontSize: 22,
                    color: 'white',
                    fontWeight: 'bold',
                    marginLeft: 140,
                    marginBottom: 0,
                    marginTop: 30,
                  }}>
                  POST{' '}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Image
                  source={require('../../assets/Homepageimages/Postimage.png')}
                  style={styles.imageiconstyle}
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Postscreen')}>
            <ImageBackground
              source={require('../../assets/Homepageimages/backgroundCard.png')}
              style={styles.backgroundstyle}>
              <View>
                <Text
                  style={{
                    fontSize: 22,
                    color: 'white',
                    fontWeight: 'bold',
                    marginLeft: 140,
                    marginBottom: 0,
                    marginTop: 20,
                  }}>
                  REVIEW NOTIFICATIONS
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 0,
                }}>
                <Image
                  source={require('../../assets/Homepageimages/bellimage.png')}
                  style={{
                    height: 40,
                    width: 30,
                    marginRight: 280,
                    marginBottom: 80,
                  }}
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Imdscreen')}>
            <ImageBackground
              source={require('../../assets/Homepageimages/backgroundCard.png')}
              style={styles.backgroundstyle}>
              <View>
                <Text
                  style={{
                    fontSize: 22,
                    color: 'white',
                    fontWeight: 'bold',
                    marginLeft: 140,
                    marginBottom: 0,
                    marginTop: 20,
                  }}>
                  PREOJECT APPLICANTS
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 0,
                }}>
                <Image
                  source={require('../../assets/Homepageimages/Dashbordimage.png')}
                  style={{
                    height: 33,
                    width: 38,
                    marginRight: 280,
                    marginBottom: 80,
                  }}
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  backgroundstyle: {
    width: 350,
    height: 100,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  imageiconstyle: {
    height: 35,
    width: 35,
    marginLeft: 0,
    marginRight: 280,
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 25,
    backgroundColor: 'white',
    padding: 20,
  },
  BtnStyle: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: 5,
    marginRight: 15,
    backgroundColor: '#C5B15D',
    borderWidth: 3,
    borderColor: 'red',
  },
  BtnTextStyle: {
    marginLeft: 130,
    marginRight: 130,
    fontSize: 30,
  },
  ModalBtnTextStyle: {
    marginTop: 3,
    fontSize: 30,
    alignSelf: 'center',
    fontWeight:'bold',
  },
  ModalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: 392,
    height: 500,
    paddingBottom: 2,
    marginTop: 0,
  },
});
