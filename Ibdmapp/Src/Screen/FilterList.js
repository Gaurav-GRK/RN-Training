/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View,ActivityIndicator,FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import {saveUserDetail} from '../Redux2/Login/LoginAction';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';

import { mpinLoginAction } from '../Redux2/Mpin/MpinAction';
import { filterAction } from '../Redux2/FilterApi/FilterAction';


const FilterList = ({ FilterAction, client,  access_token, userEmail}) => {
  const dispatch = useDispatch();
  const Data = useSelector((state) =>state.FilterReducer.FilterAction)
    useEffect(() => (
     dispatch(filterAction(userEmail,client,access_token))

    ),[])

    const renderList = ({ item }) => (
      <View style={{color:'black'}}>
      <Text>
        {item.id}
        </Text>
      </View>
    )

  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}} >
        <FlatList
        data={Data}
        renderItem={renderList}
          keyExtractor={(item,index) => index.toString()}
       />
        </View>
  )
}


const styles = StyleSheet.create({})
const mapStateToProps = (state) => {
  return {
    FilterAction:state.FilterReducer.FilterAction,
    access_token: state.Login.access_token,
    userEmail: state.Login.email,
    client: state.Login.client,
  }
}
const mapDispatchToProps = () => {
  return {
    mpinLoginAction: (mpin)=> dispatch(mpinLoginAction(mpin)),
filterAction:(userEmail,access_token,client)=> dispatch(filterAction(userEmail,access_token,client)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterList)
