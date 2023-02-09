/* eslint-disable no-dupe-keys */
/* eslint-disable semi */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-lone-blocks */
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
import { useState } from 'react';

const Moviesdetail = (props) => {
  const {  title, rating, detail, src } = props.route.params.item

  const Getdetails = () => (
    <View style={{ backgroundColor: 'yellow' }}>
      <TouchableOpacity>
        <View
          style={styles.container1}>
          <Text
            style={styles.Titelstyle}>
            {title}
          </Text>
          <Image
            style={styles.Imagestyle
            }
            source={src}
          />
          <Text
            style={styles.ratingstyle}>
            {rating}
          </Text>
          <Text
            style={styles.detailstyle}>
            {detail}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <Getdetails />
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    color: 'white',
    backgroundColor: 'white',
    marginLeft: 15,
    marginRight: 15,
    marginBottom:0,
    height:'100%'
  },
  Titelstyle: {

    marginBottom: 0,
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  Imagestyle: {
    height: 300,
    width: 220,
    marginLeft: 10,
    marginRight: 0,
    marginBottom: 20,
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  detailstyle: {
    marginBottom: 0,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    marginRight: 5,
    color: 'black',
    marginBottom:0,
  },
  ratingstyle: {
    marginBottom: 0,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    marginLeft: 10,
    marginRight: 5,
    color: 'black',
  },

});

export default Moviesdetail;
