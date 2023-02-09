import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const MovieDetails = (props) => {
  const {  id,name, imdb, src, detail,otherDetail } = props.route.params.item
  return (
    <ScrollView>
      <View style={styles.itemContainer}>
        <Text style={{color:'black'}}>
          {id}
        </Text>
        <Image source={src} style={styles.img} />
      </View>
      <View>
        <Text style={styles.itemName}>
          {name}
        </Text>
        <Text style={styles.rating}>
          {imdb}
        </Text>
        <Text style={styles.textDetail}>
          {detail}
        </Text>
        <Text style={styles.textDetail}>
          {otherDetail}
        </Text>
      </View>
    </ScrollView>
  )
}

export default MovieDetails

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
  },
  itemName: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 15,
    color: 'black',
    alignSelf: 'center'
  },
  img: {
    height: 400,
    width: 360,
    marginTop: 10,
    marginLeft: 35,
    borderRadius: 12
  },
  textDetail: {
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
    alignSelf: 'center'
  }
})