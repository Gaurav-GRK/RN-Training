/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import apiActionCreator from '../Action/ApiActionCreator';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.apiReducer.data);
  const loading = useSelector(state => state.apiReducer.loading);

  useEffect(() => {
    dispatch(apiActionCreator('https://dog.ceo/api/breeds/list/all'));
  }, []);

  const renderItem = ({ item }) => (
        <View style={styles.cardContainer}>
            <Text style={styles.breedstyle}>Breed Name</Text>
            <Text style={styles.BreedNameSTL}>{item.name}</Text>
            <View style={styles.subViewstyle}>
                <Text style={styles.subStyle}>sub-Breed</Text>
                {item.subBreeds.map(subBreed => (
                    <Text key={subBreed} style={styles.subNameSTL}>{subBreed}</Text>
                )

                )}
            </View>
        </View>
    );

  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}} >
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
   container: {
        flex: 1,
        alignItems: 'center',
    },

    cardContainer: {
        width: '100%',
        backgroundColor: 'pink',
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
    breedstyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    BreedNameSTL: {
        fontSize: 15,
        color: 'green',

    },
    subViewstyle: {
        alignSelf: 'center',
    },
    subStyle: {
        alignSelf: 'center',
        fontSize: 20,
    },
    subNameSTL: {
        fontSize: 15,
        marginLeft: 10,
        color: 'brown',

    },

});