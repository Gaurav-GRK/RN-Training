/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */

/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DogsUrl } from '../ApiUrl/DogsUrl';
const DogsList1 = ({ navigation }) => {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        fetchApiData();
    }, []);
    const fetchApiData = async () => {
        try {
            const responce = await axios.get(DogsUrl);
            data = responce.data.message;
            setPostData(Object.keys(data).map(breed => ({ name: breed, subBreeds: data[breed] })));
            console.log(responce.data.message);
        } catch (err) {
            console.log(err);
        }
    };
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
        <View style={styles}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={postData}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
        </View>
    );
};

export default DogsList1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    cardContainer: {
        width: '100%',
        backgroundColor: 'yellow',
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
