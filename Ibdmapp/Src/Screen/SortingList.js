/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import Modal from 'react-native-modal';

const SortingList = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [images, setImages] = useState(
    (DATA = [
      {
        id: '1',
        rating: '***',
        title: 'HALLOWEEN',
        src: require('../../assets/Moviesimages/Ha.jpg'),
        detail:
          'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',
      },
      {
        id: '2',
        title: 'ON THE COURT',
        rating: '*****',
        src: require('../../assets/Moviesimages/s1.jpg'),
        detail:
          'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',
      },
      {
        id: '3',
        title: 'RRR',
        rating: '***',
        src: require('../../assets/Moviesimages/RRR.jpg'),
        detail:
          'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',
      },
      {
        id: '4',
        title: 'ALADDIN',
        rating: '*',
        src: require('../../assets/Moviesimages/Al.jpg'),
        detail:
          'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',
      },
      {
        id: '5',
        title: 'FREE GUY',
        rating: '***',
        src: require('../../assets/Moviesimages/a2.jpg'),
        detail:
          'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',
      },
      {
        id: '6',
        title: 'FROZEN',
        rating: '**',
        src: require('../../assets/Moviesimages/A3.jpg'),
        detail:
          'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',
      },
      {
        id: '7',
        title: 'Paw',
        rating: '**',
        src: require('../../assets/Moviesimages/A4.jpg'),
        detail:
          'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',
      },
      {
        id: '8',
        title: 'IRONMAN',
        rating: '*****',
        src: require('../../assets/Moviesimages/a6.jpg'),
        detail:
          'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',
      },
      {
        id: '9',
        title: 'ISACRIFICATI',
        rating: '*',
        src: require('../../assets/Moviesimages/a7.jpg'),
        detail:
          'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',
      },
      {
        id: '10',
        title: 'WAR',
        rating: '*****',
        src: require('../../assets/Moviesimages/war.jpg'),
        detail:
          'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',
      },
      {
        id: '11',
        title: 'WAR',
        rating: '*****',
        src: require('../../assets/Moviesimages/war.jpg'),
        detail:
          'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',
      },
      {
        id: '12',
        title: 'WAR',
        rating: '****',
        src: require('../../assets/Moviesimages/war.jpg'),
        detail:
          'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',
      },
    ]),
  );

  const renderItem = ({item}) => (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Moviesdetail', {item})}>
        <Image style={styles.ImageStyle} source={item.src} />
        <Text style={styles.TextStyle}>{item.title}</Text>
        <Text style={styles.RatingStyle}>{item.rating}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View>
      <View style={styles.ContainerView}>
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
                <TouchableOpacity onPress={() => navigation.navigate('SorTingView')}>
                  <Text style={styles.ModalBtnTextStyle}>About</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
      <View style={{height: 620}}>
        <FlatList
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      {/*
      <View style={styles.ContainerView}>
        <TouchableOpacity onPress={()=>navigation.navigate('List')}
          style={styles.BtnStyle}>
          <Text style={styles.BtnTextStyle}>
            SortList
          </Text>
        </TouchableOpacity>
      </View>*/}
      {/* <View style={styles.ContainerView}>
      <View style={styles.BtnStyle}>
        <TouchableOpacity onPress={toggleModal}>
          <Text style={styles.BtnTextStyle}>SortList</Text>
        </TouchableOpacity>

        <Modal isVisible={isModalVisible}>
          <View
            style={styles.ModalContainer}>
            <Text style={{color: 'red', alignSelf: 'center',marginTop:20}}>
              Hello ! how are you
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('')}  ><Text style={styles.ModalBtnTextStyle}>List of Movies</Text></TouchableOpacity>

              <TouchableOpacity onPress={toggleModal} style={styles.ModalBtnstyle}>
                <Text style={styles.ModalBtnTextStyle}>Modal Hide</Text>
              </TouchableOpacity>
          </View>
        </Modal>
      </View>*
      </View>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  ImageStyle: {
    height: 160,
    width: 110,
    margin: 10,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  TextStyle: {
    marginBottom: 5,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  RatingStyle: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  ContainerView: {
    /*color: 'white',
    shadowColor: '#297676',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 16,
    overflow: 'hidden',*/
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
  ModalBtnstyle: {
    alignSelf: 'center',
    marginTop: 100,
    backgroundColor: '#C5B15D',
    borderWidth: 1,
    borderColor: 'red',
    height: 30,
    width: 120,
  },
  ModalBtnTextStyle: {
    marginTop: 3,
    fontSize: 30,
    alignSelf: 'center',
    fontWeight:'bold',
  },
  ModalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: 392,
    height: 500,
    paddingBottom: 2,
  },
});

export default SortingList;
