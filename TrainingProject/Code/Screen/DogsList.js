import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { myAxiosGetRequest } from './ApiScreen/Url'

const DogBreedsScreen = () => {
  const [listDogData, setListDogData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get(myAxiosGetRequest)
      const data = res.data.message
      setListDogData(Object.keys(data).map(listDogData => ({ name: listDogData, subBreeds: data[listDogData] })))
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, [])

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.container1}>
        <Text style={styles.dogname}>
          Dog Name:
        </Text>
        <Text style={styles.title}>
          {item.name}
        </Text>
      </View>
      <View >
        <Text style={styles.breedname}>
          Dog SubBreed:
        </Text>
        {item.subBreeds.map(subBreed => (
          <Text key={subBreed} style={styles.dogbreed}>
            &bull; {subBreed}
          </Text>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Dog's Name
      </Text>
      <FlatList
        data={listDogData}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
export default DogBreedsScreen



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 16,
    shadowColor: '#297676',
    overflow: 'hidden',
    width: 400,
    margin: 12
  },
  title: {
    marginHorizontal: 12,
    fontSize: 20,
    color: 'green'
  },
  name: {
    fontSize: 25,
    color: 'black',
    fontWeight: '500'
  },
  container1: {
    flexDirection: 'row',
    marginLeft: 30
  },
  dogname: {
    fontSize: 20,
    color: 'black'
  },
  dogbreed: {
    marginLeft: 150,
    fontSize: 16,
    color: 'red'
  },
  breedname: {
    fontSize: 18,
    color: 'black',
    marginLeft: 30,
    marginTop: 12
  }
})