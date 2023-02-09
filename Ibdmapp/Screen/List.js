/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useState} from 'react';

const List = ({navigation}) => {
  const [images, setImages] = useState(
    (DATA = [
      {
        id: '1',
        title: 'HALLOWEEN',
        rating: '***',
        src: require('../assets/Moviesimages/Ha.jpg'),
      },
      {
        id: '2',
        title: 'ON THE COURT',
        rating: '*****',
        src: require('../assets/Moviesimages/s1.jpg'),
      },
      {
        id: '3',
        title: 'RRR',
        rating: '***',
        src: require('../assets/Moviesimages/RRR.jpg'),
      },
      {
        id: '4',
        title: 'ALADDIN',
        rating: '*',
        src: require('../assets/Moviesimages/Al.jpg'),
      },
      {
        id: '5',
        title: 'FREE GUY',
        rating: '***',
        src: require('../assets/Moviesimages/a2.jpg'),
      },
      {
        id: '6',
        title: 'FROZEN',
        rating: '**',
        src: require('../assets/Moviesimages/A3.jpg'),
      },
      {
        id: '7',
        title: 'Paw',
        rating: '**',
        src: require('../assets/Moviesimages/A4.jpg'),
      },
      {
        id: '8',
        title: 'IRONMAN',
        rating: '*****',
        src: require('../assets/Moviesimages/a6.jpg'),
      },
      {
        id: '9',
        title: 'ISACRIFICATI',
        rating: '*',
        src: require('../assets/Moviesimages/a7.jpg'),
      },
      {
        id: '10',
        title: 'ExpressJs',
        rating: '*****',
        src: require('../assets/Moviesimages/war.jpg'),
      },
      {
        id: '11',
        title: 'PHP',
        src: require('../assets/Moviesimages/war.jpg'),
      },
      {
        id: '12',
        title: 'MySql',
        src: require('../assets/Moviesimages/war.jpg'),
      },
    ]),
  );

  const renderItem = ({item}) => (
    <View
      style={{
        backgroundColor: 'white',
        alignSelf: 'center',

      }}>
      <TouchableOpacity>
        <Image
          style={{
            height: 300,
            width: 230,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 20,
            marginTop: 10,
            alignSelf: 'center',
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
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button title="hello" onPress={() => navigation.navigate('list')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    padding: 2,
  },
  
});

export default List;
