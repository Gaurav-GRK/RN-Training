import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { PutNotificationaction } from '../Redux/Notification/Action'
import { connect, useSelector } from 'react-redux'

const Notification = ({  userEmail, client, access_token, navigation, markData,PutNotificationaction,data,ids }) => {
  const Data = useSelector((state) => state.NotificationReducer.data);
  useEffect(() => {
    const ids = data?.map(Notification => Notification.id);
    PutNotificationaction(userEmail, client, access_token,ids)
  }, [])
  const renderList = ({ item }) => (
    <View style={styles.card}>
      <Image source={require('../Assests/Images/notifications.png')}
        style={styles.notImg}
      />
      <Text style={styles.message}>
        {item.message}
      </Text>
    </View>
  )
  const HeaderText = () => {
    if (markData == undefined || markData == 0) {
      return <Text style={styles.notText}>
        NOTIFICATIONS
      </Text>;
    } else {
      return (
        <Text style={styles.notText}>
          NOTIFICATIONS ({markData})
        </Text>
      );
    }
  };
  return (
    <View >
      <View style={styles.container1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../Assests/Images/back2.png')}
            style={styles.backImg}
          />
        </TouchableOpacity>
        {HeaderText()}
      </View>
      <SafeAreaView>
        <FlatList
          data={Data}
          renderItem={renderList}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    backgroundColor: '#3B4C5C'
  },
  notText: {
    color: 'white',
    alignSelf: 'center',
    marginBottom: 16,
    fontWeight: '500',
    fontSize: 17,
    marginLeft: 30,
    marginTop: 16
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 5,
    margin: 7,
    marginLeft: 7,
    height: 40
  },
  message: {
    color: 'black',
    marginLeft: 7,
    fontSize: 15,
    alignSelf: 'center'
  },
  backImg: {
    width: 25,
    height: 18,
    marginLeft: 15,
    marginTop: 17
  },
  notImg: {
    width: 12,
    height: 12,
    marginLeft: 7,
    alignSelf: 'center'

  }
})
const mapStateToProps = (state) => {
  return {
    markData: state.NotificationReducer.markData,
    data: state.NotificationReducer.data,
    access_token: state.Login.access_token,
    userEmail: state.Login.email,
    client: state.Login.client,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    mpinLoginAction: (mpin) => dispatch(mpinLoginAction(mpin)),
    PutNotificationaction: (userEmail, access_token, client,ids) => dispatch(PutNotificationaction(userEmail, access_token, client,ids)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification)