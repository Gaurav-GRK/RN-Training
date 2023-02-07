import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native'

const Imdb = () => {

  const [items, setItems] = useState([
    {
      name: 'Joker',
      imdb: 'Rating:9',
      src: require('../Assests/Images/joker.jpg')
    },
    {
      name: 'Pathan',
      imdb: 'Rating:8',
      src: require('../Assests/Images/pathan.jpg')
    },
    {
      name: 'Avengers',
      imdb: 'Rating:9',
      src: require('../Assests/Images/avenger.jpg')
    },
    {
      name: 'Avatar',
      imdb: 'Rating:9',
      src: require('../Assests/Images/Avatar.jpg')
    },
    {
      name: 'Avatar2',
      imdb: 'Rating:9.2',
      src: require('../Assests/Images/Avatar.jpg')
    },
    {
      name: 'Hero',
      imdb: 'Rating:5',
      src: require('../Assests/Images/Hero.jpg')
    },
    {
      name: 'The Last of us',
      imdb: 'Rating:6',
      src: require('../Assests/Images/Lastus.jpg')
    },
    {
      name: 'Vadh',
      imdb: 'Rating:7',
      src: require('../Assests/Images/vadh.jpg')
    },
    {
      name: 'Thor',
      imdb: 'Rating:7',
      src: require('../Assests/Images/Thor.jpg')
    },
    {
      name: 'Titanic',
      imdb: 'Rating:8',
      src: require('../Assests/Images/titanic.jpg')
    },
    {
      name: 'Gandhi Godse',
      imdb: 'Rating:6',
      src: require('../Assests/Images/gandhi.jpg')
    },
    {
      name: 'Black Panther',
      imdb: 'Rating:7',
      src: require('../Assests/Images/panther.jpg')
    },
    {
      name: 'Ant man',
      imdb: 'Rating:7',
      src: require('../Assests/Images/Antman.jpg')
    },
    {
      name: 'Wakanda',
      imdb: 'Rating:5',
      src: require('../Assests/Images/wakanda.jpg')
    },
    {
      name: 'You',
      imdb: 'Rating:7',
      src: require('../Assests/Images/you.jpg')
    },
    {
      name: 'Interstellar',
      imdb: 'Rating:9',
      src: require('../Assests/Images/inter.jpg')
    },
    {
      name: 'Gravity',
      imdb: 'Rating:8',
      src: require('../Assests/Images/gravity.jpg')
    },
    {
      name: 'RRR',
      imdb: 'Rating:9',
      src: require('../Assests/Images/rrr.jpg')
    },
    {
      name: 'Batman',
      imdb: 'Rating:7',
      src: require('../Assests/Images/batman.jpg')
    },
    {
      name: 'SpiderMan',
      imdb: 'Rating:8',
      src: require('../Assests/Images/spiderman.jpg')
    },
    {
      name: 'IronMan',
      imdb: 'Rating:7',
      src: require('../Assests/Images/ironman.jpg')
    },
    {
      name: 'Thor',
      imdb: 'Rating:6',
      src: require('../Assests/Images/Thor.jpg')
    },
    {
      name: 'Captain America',
      imdb: 'Rating:7',
      src: require('../Assests/Images/cap.jpg')
    },
    {
      name: 'Ant man',
      imdb: 'Rating:7',
      src: require('../Assests/Images/Antman.jpg')
    }
  ])

  return (
    <FlatList
      data={items}
      numColumns={3}
      style={styles.gridView}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View style={styles.itemContainer}>
            <Image source={item.src} style={{ height: 180, width: 120, marginTop: 25 }} />
            <Text style={styles.itemName}>
              {item.name}
            </Text>
            <Text style={styles.rating}>
              {item.imdb}
            </Text>
          </View>
        </TouchableOpacity>
      )} />
  )
}

export default Imdb

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  itemContainer: {
    alignItems: 'flex-start',
    padding: 11,
    backgroundColor: 'black'
  },
  itemName: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    marginTop: 10
  },
  rating: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',

  }
})