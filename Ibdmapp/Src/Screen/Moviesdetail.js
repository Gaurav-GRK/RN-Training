/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-dupe-keys */
/* eslint-disable semi */
/* eslint-disable react/no-unstable-nested-components */

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Moviesdetail = (props) => {
  const { title, rating, detail, src } = props.route.params.item

  const Getdetails = () => (
    <View style>
      <TouchableOpacity>
        <View
          style={styles.container1}>
          <Image
            style={styles.Imagestyle
            }
            source={src}
          ></Image>
          <Text
            style={styles.Titelstyle}>
            {title}
          </Text>
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
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    height: '100%',
  },
  Titelstyle: {

    marginBottom: 0,
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  Imagestyle: {
    height: 410,
    width: 300,
    borderRadius:15,
    marginLeft: 10,
    marginBottom: 15,
    marginTop: 15,
    alignSelf: 'center',
  },
  detailstyle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
    marginRight: 5,
    color: '#E6E6E6',
  },
  ratingstyle: {

    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    marginRight: 5,
    color: 'black',
  },

});

export default Moviesdetail;
