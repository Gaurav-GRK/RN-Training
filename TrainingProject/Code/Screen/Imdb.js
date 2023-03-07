import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native'
import Modal from "react-native-modal";
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height
const Imdb = ({ navigation }) => {
  const [visible, setVisible] = useState(false)
  const toggleModal = () => {
    setVisible(!visible)
  }
  const [movies, setMovies] = useState([
    {
      id: '1',
      name: 'Joker',
      imdb: 'Rating:9',
      src: require('../Assests/Images/joker.jpg'),
      detail: 'A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.',
      otherDetail: 'Arthur Fleck works as a clown and is an aspiring stand-up comic. He has mental health issues, part of which involves uncontrollable laughter. Times are tough and, due to his issues and occupation, Arthur has an even worse time than most. Over time these issues bear down on him, shaping his actions, making him ultimately take on the persona he is more known as...Joker.'
    },
    {
      id: '2',
      name: 'Pathan',
      imdb: 'Rating:8',
      src: require('../Assests/Images/pathan.jpg'),
      detail: 'An Indian spy takes on the leader of a group of mercenaries who have nefarious plans to target his homeland',
    },
    {
      id: '3',
      name: 'Avengers',
      imdb: 'Rating:9',
      src: require('../Assests/Images/avenger.jpg'),
      detail: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos.',
    },
    {
      id: '4',
      name: 'Avatar',
      imdb: 'Rating:9',
      src: require('../Assests/Images/Avatar.jpg'),
      detail: 'It is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium.',
    },
    {
      id: ' 5',
      name: 'Avatar2',
      imdb: 'Rating:9.2',
      src: require('../Assests/Images/Avatar.jpg'),
      detail: 'After repeated delays in the expected release schedule, Avatar: The Way of Water premiered in London on December 6, 2022, and was theatrically released in the United States on December 16, 2022.',
    },
    {
      id: '6',
      name: 'Hero',
      imdb: 'Rating:5',
      src: require('../Assests/Images/Hero.jpg'),
      detail: 'Hero is a 2015 Indian Hindi-language romantic action film written and directed by Nikkhil Advani, co-written by Umesh Bist, and produced by Salman Khan ',
    },
    {
      id: '7',
      name: 'The Last of us',
      imdb: 'Rating:6',
      src: require('../Assests/Images/Lastus.jpg'),
      detail: 'After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanitys last hope.',
    },
    {
      id: '8',
      name: 'Vadh',
      imdb: 'Rating:7',
      src: require('../Assests/Images/vadh.jpg'),
      detail: 'Story of an old married couple who were satisfied with their mundane middle class life, till their son decides to go for higher studies to USA.',
    },
    {
      id: '9',
      name: 'Thor',
      imdb: 'Rating:7',
      src: require('../Assests/Images/Thor.jpg'),
      detail: 'The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.',
    },
    {
      id: '10',
      name: 'Titanic',
      imdb: 'Rating:8',
      src: require('../Assests/Images/titanic.jpg'),
      detail: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
    },
    {
      id: '11',
      name: 'Gandhi Godse',
      imdb: 'Rating:6',
      src: require('../Assests/Images/gandhi.jpg'),
      detail: 'The fictional world where Mahatma Gandhi survives the attack on him and later meets Nathuram Godse in prison. Their conversation leads to a fiery debate between them.',
    },
    {
      id: '12',
      name: 'Black Panther',
      imdb: 'Rating:7',
      src: require('../Assests/Images/panther.jpg')
    },
    {
      id: '13',
      name: 'Ant man',
      imdb: 'Rating:7',
      src: require('../Assests/Images/Antman.jpg')
    },
    {
      id: '14',
      name: 'Wakanda',
      imdb: 'Rating:5',
      src: require('../Assests/Images/wakanda.jpg')
    },
    {
      id: '15',
      name: 'You',
      imdb: 'Rating:7',
      src: require('../Assests/Images/you.jpg')
    },
    {
      id: '16',
      name: 'Interstellar',
      imdb: 'Rating:9',
      src: require('../Assests/Images/inter.jpg')
    },
    {
      id: '17',
      name: 'Gravity',
      imdb: 'Rating:8',
      src: require('../Assests/Images/gravity.jpg')
    },
    {
      id: '18',
      name: 'RRR',
      imdb: 'Rating:9',
      src: require('../Assests/Images/rrr.jpg')
    },
    {
      id: '19',
      name: 'Batman',
      imdb: 'Rating:7',
      src: require('../Assests/Images/batman.jpg')
    },
    {
      id: '20',
      name: 'SpiderMan',
      imdb: 'Rating:8',
      src: require('../Assests/Images/spiderman.jpg')
    },
    {
      id: '21',
      name: 'IronMan',
      imdb: 'Rating:7',
      src: require('../Assests/Images/ironman.jpg')
    },
    {
      id: '22',
      name: 'Thor',
      imdb: 'Rating:6',
      src: require('../Assests/Images/Thor.jpg')
    },
    {
      id: '23',
      name: 'Captain America',
      imdb: 'Rating:7',
      src: require('../Assests/Images/cap.jpg')
    },
    {
      id: '24',
      name: 'Ant man',
      imdb: 'Rating:7',
      src: require('../Assests/Images/Antman.jpg')
    }
  ])
  const Filter = () => {
    return (
      <View style={styles.barIcon}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
            <Text style={styles.modalText}>
              Top Movies
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.modalText}>
              Latest Movies
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.modalText}>
              Old Movies
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.modalText}>
              Hindi Movies
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.modalText}>
              English Movies
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderCell = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('MovieDetails', { item })}>
        <View style={styles.itemContainer}>
          <Image source={item.src} style={{ height: 180, width: 120, marginTop: 25 }} />
          <Text style={styles.itemName}>
            {item.name}
          </Text>
          <Text style={styles.rating}>
            {item.imdb}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <TouchableOpacity onPress={() => toggleModal()}>
        <Image source={require('../Assests/Images/sorter.png')} style={styles.imgheader} />
      </TouchableOpacity>
      <Modal
        onBackdropPress={() => setVisible(false)}
        onBackButtonPress={() => setVisible(false)}
        isVisible={visible}
        swipeDirection='down'
        onSwipeComplete={toggleModal}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.center}>
            {Filter()}
          </View>
        </View>
      </Modal>

      <FlatList
        data={movies}
        numColumns={3}
        renderItem={renderCell}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Imdb

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'flex-start',
    padding: 11,

  },
  itemName: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
    marginTop: 10
  },
  rating: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  imgheader: {
    height: 35,
    width: 35,
    alignSelf: 'flex-end',
    marginRight: 10
  },
  modalbackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalText: {
    color: 'black',
    fontSize: 20,
    marginTop: 40,
    borderBottomWidth:1,
    alignSelf:'center',
    
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  modalContent: {
    backgroundColor: 'white',
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 400,
    paddingBottom: 20
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  barIcon: {
    width: 180,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#bbb'
  }
})