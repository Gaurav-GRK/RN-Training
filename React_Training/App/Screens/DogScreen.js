import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';

const DogBreedsScreen = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const data = response.data.message;
        setBreeds(Object.keys(data).map(breed => ({ name: breed, subBreeds: data[breed] })));
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
      {item.subBreeds.length > 0 ? (
        <View style={styles.bulletList}>
          {item.subBreeds.map(subBreed => (
            <Text key={subBreed} style={styles.bullet}> &bull; {subBreed.charAt(0).toUpperCase() + subBreed.slice(1)}</Text>
          ))}
        </View>
      ) : (
        <Text style={styles.subtitle}>No sub-breeds</Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dogs Breed</Text>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          data={breeds}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          contentContainerStyle={styles.flatListContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContainer: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
  },
  bulletList: {
    marginLeft: 16,
  },
  bullet: {
    fontSize: 14,
    marginBottom: 4,
  },
});

export default DogBreedsScreen;
