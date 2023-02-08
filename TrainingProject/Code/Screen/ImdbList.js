import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

const ImdbList = () => {
  const [list, setList] = useState([
    {
      id: '1',
      name: 'Joker',
      imdb: 'Rating:9',
      src: require('../Assests/Images/joker.jpg')
    },
    {
      id: '2',
      name: 'Pathan',
      imdb: 'Rating:8',
      src: require('../Assests/Images/pathan.jpg')
    },
    {
      id: '3',
      name: 'Avengers',
      imdb: 'Rating:9',
      src: require('../Assests/Images/avenger.jpg')
    },
    {
      id: '4',
      name: 'Avatar',
      imdb: 'Rating:9',
      src: require('../Assests/Images/Avatar.jpg')
    },
    {
      id: '5',
      name: 'Avatar2',
      imdb: 'Rating:9.2',
      src: require('../Assests/Images/Avatar.jpg')
    },
    {
      id: '6',
      name: 'Hero',
      imdb: 'Rating:5',
      src: require('../Assests/Images/Hero.jpg')
    },
    {
      id: '7',
      name: 'The Last of us',
      imdb: 'Rating:6',
      src: require('../Assests/Images/Lastus.jpg')
    },
    {
      id: '8',
      name: 'Vadh',
      imdb: 'Rating:7',
      src: require('../Assests/Images/vadh.jpg')
    },
    {
      id: '9',
      name: 'Thor',
      imdb: 'Rating:7',
      src: require('../Assests/Images/Thor.jpg')
    },
    {
      id: '10',
      name: 'Titanic',
      imdb: 'Rating:8',
      src: require('../Assests/Images/titanic.jpg')
    },
    {
      id: '11',
      name: 'Gandhi Godse',
      imdb: 'Rating:6',
      src: require('../Assests/Images/gandhi.jpg')
    },
    {
      id: '12',
      name: 'Black Panther',
      imdb: 'Rating:7',
      src: require('../Assests/Images/panther.jpg')
    },
    {
      id: '13',
      name: 'Ant man',
      imdb: 'Rating:7',
      src: require('../Assests/Images/Antman.jpg')
    },
    {
      id: '14',
      name: 'Wakanda',
      imdb: 'Rating:5',
      src: require('../Assests/Images/wakanda.jpg')
    },
    {
      id: '15',
      name: 'You',
      imdb: 'Rating:7',
      src: require('../Assests/Images/you.jpg')
    },
    {
      id: '16',
      name: 'Interstellar',
      imdb: 'Rating:9',
      src: require('../Assests/Images/inter.jpg')
    },
    {
      id: '17',
      name: 'Gravity',
      imdb: 'Rating:8',
      src: require('../Assests/Images/gravity.jpg')
    },
    {
      id: '18',
      name: 'RRR',
      imdb: 'Rating:9',
      src: require('../Assests/Images/rrr.jpg')
    },
    {
      id: '19',
      name: 'Batman',
      imdb: 'Rating:7',
      src: require('../Assests/Images/batman.jpg')
    },
    {
      id:'20',
      name: 'SpiderMan',
      imdb: 'Rating:8',
      src: require('../Assests/Images/spiderman.jpg')
    },
    {
      id: '21',
      name: 'IronMan',
      imdb: 'Rating:7',
      src: require('../Assests/Images/ironman.jpg')
    },
    {
      id: '22',
      name: 'Thor',
      imdb: 'Rating:6',
      src: require('../Assests/Images/Thor.jpg')
    },
    {
      id: '23',
      name: 'Captain America',
      imdb: 'Rating:7',
      src: require('../Assests/Images/cap.jpg')
    },
    {
      id: '24',
      name: 'Ant man',
      imdb: 'Rating:7',
      src: require('../Assests/Images/Antman.jpg')
    }
  ])


  const movieList = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.itemContainer}>
        <Image source={item.src} style={styles.img} />
        <Text style={styles.itemName}>
          {item.name}
        </Text>
      </View>

    </TouchableOpacity>
  )
  return (
    <View>
      <FlatList
        data={list}
        renderItem={movieList}
        keyExtractor={item => item.id} />
    </View>
  )
}

export default ImdbList

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 40,
    color: 'black',
    marginLeft: 25
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',

  },
  img: {
    height: 60,
    width: 60,
    marginTop: 25,
    marginLeft: 15,
    borderRadius: 12
  }
})