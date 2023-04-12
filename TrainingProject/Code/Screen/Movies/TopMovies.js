import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { stateList } from '../../Redux/FilterApi/Action'

function Sorting({ stateList, access_token, client, userEmail }) {
  const Data = useSelector((state) => state.FilterReducer.StateList);
  useEffect(() => {
    stateList(userEmail, client, access_token)
  }, [])
  const renderList = ({ item }) => (
    <View >
      <Text style={{color:'black'}}>
        {item.id}
      </Text>
      <Text style={{color:'black'}}>
        {item.value}
      </Text>
    </View>
  )
  return (
    <View>
      <FlatList
        data={Data}
        renderItem={renderList}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}
const styles = StyleSheet.create({})
const mapStateToProps = (state) => {
  return {
    StateList: state.FilterReducer.StateList,
    access_token: state.Login.access_token,
    userEmail: state.Login.email,
    client: state.Login.client,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    mpinLoginAction: (mpin) => dispatch(mpinLoginAction(mpin)),
    stateList: (userEmail, access_token, client) => dispatch(stateList(userEmail, access_token, client)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sorting)