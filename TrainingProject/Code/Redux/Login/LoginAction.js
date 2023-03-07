import * as ActionType from './LoginTypes'
import axios from "axios";


import { Alert } from "react-native";
export const LoginAction = (email, password, callback) => {
    return function (dispatch) {
        axios.post('https://qanew.lawclerk.p2klabs.com/api/v1/attorney-auth/sign_in', {
            email,
            password
        })
            .then(res => {
                console.log(res.data);
                dispatch(LoginSuccess(res.data, res))
                callback()
            })
            .catch(error => {
                console.log(error.response.data);
                Alert.alert('Error', 'Enter Valid Data')
            })
    }
}
export const saveUserDetail = (res) => {
    return function (dispatch) {
        dispatch(LoginSuccess(res.data, res))
    }
}




export const LoginSuccess = (data, res) => ({
    type: ActionType.LOGIN_SUCCESS,
    sucess: data.sucess,
    first_name: data.first_name,
    last_name: data.last_name,
    id: data.id,
    payload: data.id,
    email: data.email,
    clio_member: data.clio_member,
    access_token: res.headers['access-token'],
    client: res.headers.client,
    mpin_enabled: data.mpin_enabled

})