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
import {useState} from 'react';

const Moviesdetail = ({navigation}) => {
  const [images, setImages] = useState(
    (DATA = [
      {
        id: '1',
        title: '1.HALLOWEEN',
        rating:
          'Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.',
      },
      {
        id: '2',
        title: '2.ON THE COURT',
        rating:
          '“Court” deals with an aged Marathi folk singer living in Mumbai, Narayan Kamble, who’s arrested on a bizarre accusation. The state alleges that a song he performed drove a manhole cleaner to commit suicide, and that he is therefore responsible for the man',
      },
      {
        id: '3',
        title: '3.RRR',
        rating:
          'RRR[a] is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris',
      },
      {
        id: '4',
        title: '4.ALADDIN',
        rating:
          'Rajamouli came across stories about the lives of Rama Raju and Bheem and connected the coincidences between them, imagining what would have happened had they met, and been friends.',
      },
      {
        id: '5',
        title: '5.FREE GUY',
        rating:
          ' It was filmed extensively across India, with a few sequences filmed in Ukraine and Bulgaria. The film s soundtrack and background score were composed by M. M. Keeravani, with cinematography by K. K. Senthil Kumar and editing by A.',
      },
      {
        id: '6',
        title: '6.FROZEN',
        rating: '**',
      },
      {
        id: '7',
        title: '7.Paw',
        rating: '**',
      },
      {
        id: '8',
        title: 'IRONMAN',
        rating: '*****',
      },
      {
        id: '9',
        title: 'ISACRIFICATI',
        rating: '*',
      },
      {
        id: '10',
        title: 'ExpressJs',
        rating: '*****',
      },
      {
        id: '11',
        title: 'PHP',
      },
      {
        id: '12',
        title: 'MySql',
      },
    ]),
  );

  const renderItem = ({item}) => (
    <View style={{backgroundColor: 'yellow'}}>
      <TouchableOpacity>
        <View
          style={{
            color: 'white',
            backgroundColor: 'white',
            marginLeft: 15,
            marginRight: 15,
          }}>
          <Text
            style={{
              marginBottom: 30,
              fontSize: 40,
              alignSelf: 'center',
              fontWeight: 'bold',
              color: 'black',
            }}>
            {item.title}
          </Text>
          <View
            style={{
              backgroundColor: 'yellow',
              height: 150,
              marginLeft: 15,
              marginRight: 15,
            }}>
            <Text
              style={{
                marginBottom: 0,
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                marginLeft: 5,
                marginRight: 5,
                color: 'black',
              }}>
              {item.rating}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 2,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default Moviesdetail;
