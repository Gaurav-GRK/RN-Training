/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {DogsUrl} from '../ApiUrl/DogsUrl';
const Api = ({navigation}) => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetchApiData();
  }, []);
  const fetchApiData = async () => {
    try {
      const responce = await axios.get(DogsUrl);
      setPostData(responce.data.message);
      console.log(responce.data.message);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ScrollView
        styles={styles.scrollviewstyle}
        horizontal={false}
        showsHorizontalScrollIndicator={false}>
    <View style={styles.container}>

        {Object.keys(postData).map(breed => {
          /*console.log(breed);*/
          return (
            <View style={styles.cardContainer} key={breed}>
              <Text style={styles.breedstyle}>Breed name</Text>
              <Text style={styles.cardtexttitel}>{breed}</Text>
              <Text style={styles.subBreedstyle}>Subbreed Name</Text>
              { postData[breed].map(subBreed => {
                console.log(subBreed);
                return(
                <View key={subBreed}>
                  <Text style={{}}>{subBreed}</Text>
                </View>
           ) })}
            </View>
          );
        })}

    </View>
    </ScrollView>
  );
};

export default Api;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  cardContainer: {
    width: '100%',
    backgroundColor: 'white',
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowoffset: {
      width: 0,
      height: 0,
    },
    shadowOpecity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  cardtexttitel: {
    marginVertical: 10,
    fontWeight: 'bold',
    marginRight: 0,
    alignContent: 'center',
  },
  breedstyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subBreedstyle: {
    alignSelf: 'center',
    fontSize: 15,
  },
});
