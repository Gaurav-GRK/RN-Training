import LOGIN_TYPES from "./LoginTypes";
import axios from "axios";
import { Login_URL } from "../../Screen/ApiScreen/Url";

import { Alert } from "react-native";
export const LoginAction = (email, password,callback) => {
    return function(dispatch){
        axios.post('https://qanew.lawclerk.p2klabs.com/api/v1/attorney-auth/sign_in', {
            email,
            password
        })
            .then(response => {
                console.log(response.data);
                dispatch(LoginSuccess(response.data,response))
                callback()
            })
            .catch(error => {
                console.log(error.response.data);
                Alert.alert('Error', 'Invalid')
            })
    }
}



export const LoginSuccess=(data,response)=>({
    type:LOGIN_TYPES.LOGIN_SUCCESS,
    payload:data
      
})