import React, { useCallback, useMemo } from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const data = [
  {
    id: '1',
    icon: require('../Assets/Images/home.png'),
    text: 'Homescreen',
    screen: 'DrawerNavigator',
  },
  {
    id: '2',
    icon: require('../Assets/Images/profile-user.png'),
    text: 'Profile',
    screen: 'ProfileView',
  },
  {
    id: '3',
    icon: require('../Assets/Images/bookmark.png'),
    text: 'Watchlist',
    screen: 'Watchlist',
  },
];

const Row = ({ item }) => {
  const nav = useNavigation();

  const handlePress = useCallback(() => {
    nav.navigate(item.screen);
  }, [nav, item.screen]);

  return (
    <TouchableOpacity style={styles.rowContainer} onPress={handlePress}>
      <View style={styles.rowSubContainer}>
        <Image source={item.icon} style={styles.rowIcon} resizeMode="contain" />
        <Text style={styles.rowText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const CustomDrawer = () => {
  const nav = useNavigation();

  const logoutView = useMemo(() => {
    return (
      <View style={styles.logoutView}>
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
  }, []);

  const renderItem = useCallback(({ item }) => <Row item={item} />, []);

  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <Animated.View>
      <View style={styles.subContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={{ marginTop: 40, marginHorizontal: 10 }}
        />
        {logoutView}
      </View>
    </Animated.View>
  );
};

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