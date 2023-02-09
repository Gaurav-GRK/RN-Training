/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import App from '../App';

const ImdbHomescreen = ({navigation}) => {
  const [images, setImages] = useState(
    (DATA = [
      {
        id: '1',
        title: 'HALLOWEEN',
        rating: '***',
        src: require('../assets/Moviesimages/Ha.jpg'),
        detail:'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',

    },
      {
        id: '2',
        title: 'ON THE COURT',
        rating: '*****',
        src: require('../assets/Moviesimages/s1.jpg'),
        detail:'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',

      },
      {
        id: '3',
        title: 'RRR',
        rating: '***',
         src: require('../assets/Moviesimages/RRR.jpg'),
        detail:'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',


      },
      {
        id: '4',
        title: 'ALADDIN',
        rating: '*',
        src: require('../assets/Moviesimages/Al.jpg'),
        detail:'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',

      },
      {
        id: '5',
        title: 'FREE GUY',
        rating: '***',
        src: require('../assets/Moviesimages/a2.jpg'),
        detail:'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',

      },
      {
        id: '6',
        title: 'FROZEN',
        rating: '**',
        src: require('../assets/Moviesimages/A3.jpg'),
        detail:'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',

      },
      {
        id: '7',
        title: 'Paw',
        rating: '**',
        src: require('../assets/Moviesimages/A4.jpg'),
        detail:'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',

      },
      {
        id: '8',
        title: 'IRONMAN',
        rating: '*****',
        src: require('../assets/Moviesimages/a6.jpg'),
        detail:'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',

      },
      {
        id: '9',
        title: 'ISACRIFICATI',
        rating: '*',
        src: require('../assets/Moviesimages/a7.jpg'),
        detail:'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',

      },
      {
        id: '10',
        title: 'WAR',
        rating: '*****',
        src: require('../assets/Moviesimages/war.jpg'),
        detail:'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',

      },
      {
        id: '11',
        title: 'WAR',
        rating: '*****',
        src: require('../assets/Moviesimages/war.jpg'),
        detail:'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',

      },
      {
        id: '12',
        title: 'WAR',
        rating: '****',
        src: require('../assets/Moviesimages/war.jpg'),
        detail:'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',

      },
    ]),
  );

  const renderItem = ({item}) => (
    <View style={{backgroundColor: 'white'}}>
      <TouchableOpacity onPress={()=> navigation.navigate('Moviesdetail',{item})}>
          <Image
          style={{
            height: 160,
            width: 110,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 20,
            marginTop: 10,
          }}
          source={item.src}
        />
        <Text
          style={{
            marginBottom: 10,
            alignSelf: 'center',
            fontWeight: 'bold',
            color: 'black',
          }}>
          {item.title}
        </Text>
        <Text
          style={{marginBottom: 0, alignSelf: 'center', fontWeight: 'bold'}}>
          {item.rating}
        </Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    padding: 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default ImdbHomescreen;
