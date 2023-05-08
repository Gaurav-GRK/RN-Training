import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const PostProjectSuccess = ({ route, navigation }) => {
  const [createClio, setCreateClio] = useState(false);
  const [isInvitation, setIsInvitation] = useState(false);
  const routeData = route.params;
  const getTitle = () => {
    if (!!routeData?.title) {
      return routeData?.title
    }
    else {
      return isInvitation ? 'Your Project Invitation Has Been Sent!' : 'Your Project has been posted!'
    }
  }
  const getMessage = () => {
    if (!!routeData?.message) {
      return routeData?.message;
    }
    else {
      return null;
    }
  }
  const getSubtitle = () => {
    if (!!routeData?.subtitle ) {
      return routeData?.subtitle
    }
    else {
      return createClio ? 'A Clio Task has also been created for this project.': null 
    }
  }
  return (
    <SafeAreaView style={{ justifyContent: 'center' }}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../Assests/Images/filemanager.png')}
        />
        <Text style={styles.text}>
          {getTitle()}
        </Text>
        {!!getSubtitle() && <Text style={styles.subtitle}>
          {getSubtitle()}
          </Text>}
        {!!getMessage() && <Text style={styles.subtitle}>
          {getMessage()}
        </Text>}
        <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProjectDashboardScreen');
        }}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            VIEW YOUR DASHBOARD
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default PostProjectSuccess

const styles = StyleSheet.create({
  container: {
    marginTop: 140,
    alignItems: 'center',
  },
  centerContainer: {
    alignItems: 'center',
  },
  logo: {
    height: 120,
    width: 120,
    marginBottom: 40,
  },
  subtitle: {
    color: '#3B4C5C',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 14,
    marginHorizontal: 20,
    textAlign: 'center'
  },
  buttonContainer: {
    borderColor: '#C5B15D',
    borderRadius: 8,
    marginTop: 40,
    marginHorizontal: 20,
    height: 38,
    borderWidth: 1,
    justifyContent: 'center',
  },
  buttonText: {
    marginHorizontal: 60,
    color: '#C5B15D',
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'center',
  },
})