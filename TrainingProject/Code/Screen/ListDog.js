import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import apiCall from '../Redux/ApiActionCreator'
import { myAxiosGetRequest } from './ApiScreen/Url';

const ListDog = () => {

  const dispatch = useDispatch();
  const listDogData = useSelector((state) => state.ApiReducer.data);
  const loading = useSelector((state) => state.ApiReducer.loading);

  useEffect(() => {

    dispatch(apiCall());

  }, []);
  const renderList = ({ item }) => (
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
  )
  return (
    <View style={styles.indicator}>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) :
        (
          <View style={styles.container}>
            <Text style={styles.name}>
              Dog's Name
            </Text>
            <FlatList
              data={listDogData}
              renderItem={renderList}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>)
      }
    </View>
  );
};

export default ListDog;
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
  container1: {
    flexDirection: 'row',
    marginLeft: 30
  },
  dogname: {
    fontSize: 20,
    color: 'black'
  },
  title: {
    marginHorizontal: 12,
    fontSize: 20,
    color: 'green'
  },
  indicator: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  name: {
    fontSize: 25,
    color: 'black',
    fontWeight: '500'
  },
  breedname: {
    fontSize: 18,
    color: 'black',
    marginLeft: 30,
    marginTop: 12
  },
  dogbreed: {
    marginLeft: 150,
    fontSize: 16,
    color: 'red'
  },
})