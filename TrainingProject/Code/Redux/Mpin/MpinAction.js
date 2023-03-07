import * as ActionType from './MpinActionType';
import { Alert } from 'react-native';
import axios from 'axios';
import React from 'react'

export const mpinLoginAction = (mpin,{userEmail,client,access_token}) => {
    return function(dispatch) {
    var body = {'mpin' : mpin}
    const headers = {
        uid : userEmail,
        client : client,
        'access-token' : access_token
  }
    axios
          .post('https://qanew.lawclerk.p2klabs.com/api/v1/attorney/sign_in_mpin', body,{headers : headers})
          .then((res) => {
            dispatch(MpinLoginSuccess(res.data))
          })
          .catch((error) => {
              Alert.alert('Invalid Pin')
              console.log(error);
          })
}
};
const MpinLoginSuccess = (data) => {
    return {
      type: ActionType.MPIN_LOGIN_SUCCESS,
      sucess : data.success,
      first_name : data.first_name,
      last_name : data.last_name,
      payload: data.id,
      email : data.email,
      mpin_enabled : data.mpin_enabled
    }
  }



