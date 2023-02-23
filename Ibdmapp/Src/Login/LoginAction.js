/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import * as ActionType from './LoginActionTypes';
import axios from 'axios';



export const loginAction = (email,password, callback) => {


    return function(dispatch) {
    var body = {'email' : email,
    'password' : password,
    };
    axios
          .post('https://devnew.lawclerk.p2klabs.com/api/v1/attorney-auth/sign_in',body)
          .then((res) => {
            dispatch(LoginSuccess(res.data, res));
            callback();
          })
          .catch((error) => {
              if (error.response != undefined){
                alert('Entered email/password are invalid, please verify.');
              }
              // dispatch(LoginFailed('Enter valid credentials'))
          });
};
};



const LoginSuccess = (data,res) => {
    return {
      type: ActionType.UPDATE_EVENT,
      email: data.email, 
    };
  };



