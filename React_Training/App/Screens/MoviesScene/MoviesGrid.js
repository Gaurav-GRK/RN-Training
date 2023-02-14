import React from 'react';
import {useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const MoviesGrid = ({navigation}) => {
  const [movies, setMovies] = useState([
    {
      id: '1',
      title: 'The Shawshank Redemption',
      image: require('../../Assets/Images/theShRed.jpg'),
      rating: 9.2,
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '2',
      title: 'Inception',
      image: require('../../Assets/Images/inception@.jpeg'),
      rating: 9.2,
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '3',
      title: 'interstellar',
      image: require('../../Assets/Images/interstellar.jpg'),
      rating: 9.0,
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '4',
      title: ' Dark',
      image: require('../../Assets/Images/dark.jpeg'),
      rating: 8.8,
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '5',
      title: 'The Godfather',
      image: require('../../Assets/Images/godfather.jpeg'),
      rating: 8.7,
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '6',
      title: 'The Forest Gump',
      image: require('../../Assets/Images/forestgump.jpeg'),
      rating: 8.6,
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '7',
      title: 'The Endgame',
      image: require('../../Assets/Images/endgame.jpeg'),
      rating: 8.4,
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: '8',
      title: 'Avatar',
      image: require('../../Assets/Images/avatar.jpeg'),
      rating: 8.0,
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ]);

  const getNavBar = () => {
    const left = require('../../Assets/Images/Hamburger.png');
    return (
      <>
        <View style={styles.navBar}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DrawerNavigator')}>
            <Image source={left} style={styles.navIcon}></Image>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const renderMovie = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('MovieDetails', {item})}>
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
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <FlatList
        numColumns={2}
        data={movies}
        renderItem={renderMovie}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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
    flexDirection: 'row',
    paddingVertical: 10,
    paddingBottom: 20,
  },
});
export default MoviesGrid;
