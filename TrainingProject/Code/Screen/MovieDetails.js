import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const MovieDetails = (props) => {
  const {  id,name, imdb, src, detail,otherDetail } = props.route.params.item
  const [movieDetails, setMovieDetails] = useState([
    {/* {
      id: '1',
      name: 'Joker',
      detail: 'Joker is a 2019 film directed by Tood Phillips.',
      src: require('../Assests/Images/joker.jpg')
    },
    {
      id: '2',
      name: 'Pathan',
      detail:'An Indian spy takes on the leader of a group of mercenaries who have nefarious plans to target his homeland',
      src: require('../Assests/Images/pathan.jpg')
    },
    {
      id: '3',
      name: 'Avengers',
      detail:'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos.',
      src: require('../Assests/Images/avenger.jpg')
    },
    {
      id:'4',
      name: 'Avatar',
      detail:'It is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium.',
      src: require('../Assests/Images/Avatar.jpg')
    },
    {
      id: '5',
      name: 'Avatar2',
      detail:'After repeated delays in the expected release schedule, Avatar: The Way of Water premiered in London on December 6, 2022, and was theatrically released in the United States on December 16, 2022.',
      src: require('../Assests/Images/Avatar.jpg')
    },
    {
      id: '6',
      name: 'Hero',
      detail:'Hero is a 2015 Indian Hindi-language romantic action film written and directed by Nikkhil Advani, co-written by Umesh Bist, and produced by Salman Khan ',
      src: require('../Assests/Images/Hero.jpg')
    },
    {
      id: '7',
      name: 'The Last of us',
      detail:'After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanitys last hope.',
      src: require('../Assests/Images/Lastus.jpg')
    },
    {
      id: '8',
      name: 'Vadh',
      detail: 'Story of an old married couple who were satisfied with their mundane middle class life, till their son decides to go for higher studies to USA.',
      src: require('../Assests/Images/vadh.jpg')
    },
    {
      id: '9',
      name: 'Thor',
      detail: 'The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.',
      src: require('../Assests/Images/Thor.jpg')
    },
    {
      id: '10',
      name: 'Titanic',
      detail: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
      src: require('../Assests/Images/titanic.jpg')
    },
    {
      id: '11',
      name: 'Gandhi Godse',
      detail: 'The fictional world where Mahatma Gandhi survives the attack on him and later meets Nathuram Godse in prison. Their conversation leads to a fiery debate between them.',
      src: require('../Assests/Images/gandhi.jpg')
    },*/}


  ])

  const detailScreen = ({ item }) => (
    <>
      <View style={styles.itemContainer}>
        <Text style={{color:'black'}}>
          {id}
        </Text>
        <Image source={src} style={styles.img} />
      </View>
      <View>
        <Text style={styles.itemName}>
          {name}
        </Text>
        <Text style={styles.rating}>
          {imdb}
        </Text>
        <Text style={styles.textDetail}>
          {detail}
        </Text>
        <Text style={styles.textDetail}>
          {otherDetail}
        </Text>
      </View>
    </>

  )
  return (
    <View>
      <FlatList
        data={movieDetails}
        renderItem={detailScreen}
        keyExtractor={item => item.id} />
    </View>
  )
}

export default MovieDetails

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
  },
  itemName: {
    fontSize: 30,
    fontWeight: '600',
    marginTop: 15,
    color: 'black',
    alignSelf: 'center'
  },
  img: {
    height: 400,
    width: 360,
    marginTop: 10,
    marginLeft: 35,
    borderRadius: 12
  },
  textDetail: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    marginTop: 15,
    marginLeft: 15
  },
  rating: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
    alignSelf: 'center'
  }
})