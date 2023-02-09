import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const MovieDetails = (props) => {
  const { title, image, rating, details } = props.route.params.item

  const getNavBar = () => {
    const left = require('../../Assets/Images/backArrow.png')
    return (
      <>
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => {
            props.navigation.navigate('DrawerNavigator')
          }}>
            <Image source={left} style={styles.navIcon}></Image>
          </TouchableOpacity>
        </View>
      </>

    )
  }

  const getDetailScreen = () => {
    return (
      <>
        <View >
          <Image source={image} style={styles.image} resizeMode='contain' />
        </View>
        <View>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.rating}>
            IMDb rating: {rating}
          </Text>
          <Text style={styles.details}>
            {details}
          </Text>
        </View>
      </>
    )
  }
  return (

    <View>
      {getNavBar()}
      {getDetailScreen()}
    </View>

  )
}

export default MovieDetails

const styles = StyleSheet.create({

  title: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 15,
    color: 'black',
    alignSelf: 'center'
  },
  image: {
    height: 400,
    width: 300,
    marginTop: 20,
    marginHorizontal: 35,
    borderRadius: 12
  },
  details: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    marginTop: 15,
    marginLeft: 15
  },
  rating: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
    alignSelf: 'center',
    marginVertical: 10
  },
  navIcon: {
    height: 14,
    marginHorizontal: 20,
    marginTop: 10
  },
  navBar: {
    backgroundColor: 'red',
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    paddingBottom: 20
  },
})