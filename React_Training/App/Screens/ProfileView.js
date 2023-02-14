import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProfileView = ({profileImage, name, bio}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../Assets/Images/godfather.jpeg')}
        style={styles.image}
      />
      <Text style={styles.name}>Godfather</Text>
      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  bio: {
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ProfileView;
