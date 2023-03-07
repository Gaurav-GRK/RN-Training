import axios from "axios";
import * as ActionType from './ActionTypes'

export  const FilterAction=()=>{
  return function(dispatch){
    axios.get('https://qanew.lawclerk.p2klabs.com/api/v1/dropdowns/states_list_for_subscription')
    .then(response => {
      console.log(response.data);
      dispatch(FilterSuccess(response.data,response))
      
  })
  .catch(error => {
      console.log(error.response.data);
      Alert.alert('Error', 'Enter Valid Data')
  })
  }
} 

export const FilterSuccess=(data,response)=>({
  type:ActionType.FILTER_SUCCESS,
  payload:data
    
})