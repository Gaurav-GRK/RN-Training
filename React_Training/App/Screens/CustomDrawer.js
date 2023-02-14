import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
const {width, height} = Dimensions.get('window');
function CustomDrawer() {
  const nav = useNavigation();
  const logoutView = () => {
    return (
      <View styles={styles.logoutView}>
        <TouchableOpacity style={styles.logoutButton}>
          <Image
            source={require('../Assets/Images/exit.png')}
            style={styles.rowIcon}
            resizeMode="contain"
          />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const getRowsContainer = () => {
    return (
      <View style={{marginTop: 40, marginHorizontal: 10}}>{getRow()}</View>
    );
  };

  const getRow = () => {
    return (
      <>
        <TouchableOpacity
          style={styles.rowContainer}
          onPress={() => {
            nav.navigate('DrawerNavigator');
          }}>
          <View style={styles.rowContainer}>
            <View style={styles.rowSubContainer}>
              <Image
                source={require('../Assets/Images/home.png')}
                style={styles.rowIcon}
                resizeMode="contain"></Image>
              <Text style={styles.rowText}>Homescreen</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rowContainer}
          onPress={() => {
            nav.navigate('ProfileView');
          }}>
          <View style={styles.rowContainer}>
            <View style={styles.rowSubContainer}>
              <Image
                source={require('../Assets/Images/profile-user.png')}
                style={styles.rowIcon}
                resizeMode="contain"></Image>
              <Text style={styles.rowText}>Profile</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.rowContainer} onPress={() => {
        nav.navigate('ListScreen')
      }}>
        <View style={styles.rowContainer}>
          <View style={styles.rowSubContainer}>
            <Image source={require('../Assets/Images/like.png')} style={styles.rowIcon} resizeMode='contain'></Image>
            <Text style={styles.rowText}>Recommendation</Text>
          </View>
        </View>
      </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.rowContainer}
          onPress={() => {
            nav.navigate('Watchlist');
          }}>
          <View style={styles.rowContainer}>
            <View style={styles.rowSubContainer}>
              <Image
                source={require('../Assets/Images/bookmark.png')}
                style={styles.rowIcon}
                resizeMode="contain"></Image>
              <Text style={styles.rowText}>Watchlist</Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <Animated.View>
      <View style={styles.subContainer}>
        <ScrollView>{getRowsContainer()}</ScrollView>
        {logoutView()}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    height: '100%',
    width: width * 0.8,
    backgroundColor: '#ffffff',
  },
  rowIcon: {
    height: 16,
    width: 16,
  },
  logoutButton: {
    height: 40,
    marginLeft: 30,
    marginRight: 20,
    marginBottom: 26,
    flexDirection: 'row',
  },
  rowContainer: {
    height: 54,
    flexGrow: 1,
    backgroundColor: 'rgba(244, 244, 244, 1)',
    marginVertical: 12,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  rowSubContainer: {
    height: 52,
    borderBottomColor: '#f1eff1',
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowText: {
    fontSize: 13,
    textAlign: 'left',
    marginLeft: 13,
    color: '#000000',
    fontWeight: '600',
  },
  logoutView: {
    height: 100,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
  logoutText: {
    marginLeft: 10,
    fontSize: 13,
    textAlign: 'left',
    fontWeight: '500',
    color: 'black',
  },
});
export default CustomDrawer;
