import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { FilterSuccess } from '../../Redux/FilterApi/Action'

const TopMovies = () => {
  return (
    <View>
      <Text>TopMovies</Text>
    </View>
  )
}



const styles = StyleSheet.create({})
const mapStateToProps = (state) => {
  return {
    data: state.FilterReducer.data,
    access_token: state.Login.access_token,
    userEmail: state.Login.email,
    client: state.Login.client,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    mpinLoginAction: (mpin) => dispatch(mpinLoginAction(mpin)),
    saveUserDetail: (res) => dispatch(saveUserDetail(res)),
    FilterSuccess:(data)=>dispatch(FilterSuccess(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMovies)