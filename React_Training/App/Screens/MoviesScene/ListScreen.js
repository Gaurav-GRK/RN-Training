import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MoviesGrid from './MoviesGrid';
import {useNavigation} from '@react-navigation/native';
const ListScreen = ({navigation}) => {
  const movies = [
    {
      id: '1',
      title: 'The Shawshank Redemption',
      image: require('../../Assets/Images/theShRed.jpg'),
      rating: 9.2,
    },
    {
      id: '2',
      title: 'Inception',
      image: require('../../Assets/Images/inception@.jpeg'),
      rating: 9.2,
    },
    {
      id: '3',
      title: 'interstellar',
      image: require('../../Assets/Images/interstellar.jpg'),
      rating: 9.0,
    },
    {
      id: '4',
      title: ' Dark',
      image: require('../../Assets/Images/dark.jpeg'),
      rating: 8.8,
    },
    {
      id: '5',
      title: 'The Godfather',
      image: require('../../Assets/Images/godfather.jpeg'),
      rating: 8.7,
    },
    {
      id: '6',
      title: 'The Forest Gump',
      image: require('../../Assets/Images/forestgump.jpeg'),
      rating: 8.6,
    },
    {
      id: '7',
      title: 'The Endgame',
      image: require('../../Assets/Images/endgame.jpeg'),
      rating: 8.4,
    },
    {
      id: '8',
      title: 'Avatar',
      image: require('../../Assets/Images/avatar.jpeg'),
      rating: 8.0,
    },
  ];

  const getNavBar = () => {
    const left = require('../../Assets/Images/backArrow.png');
    return (
      <>
        <View style={styles.navBar}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DrawerNavigator');
            }}>
            <Image source={left} style={styles.navIcon}></Image>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const renderMovie = ({item}) => (
    <View style={{alignItems: 'center'}}>
      <Image
        source={item.image}
        style={{width: 150, height: 220, margin: 10}}
      />
      <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.title}</Text>
      <Text style={{color: 'grey', fontSize: 14}}>
        IMDb rating: {item.rating}
      </Text>
    </View>
  );

  return (
    <View>
      {/* {getNavBar()} */}
      <FlatList
        numColumns={1}
        data={movies}
        renderItem={renderMovie}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    marginTop: 10,
    // backgroundColor: 'yellow'
  },
  navIcon: {
    height: 14,
    marginHorizontal: 20,
    marginTop: 10,
  },
  navBar: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingBottom: 20,
  },
});
export default ListScreen;
