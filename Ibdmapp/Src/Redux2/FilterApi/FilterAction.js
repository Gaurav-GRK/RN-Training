/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import * as ActionType from './FilterActionType';


export  const filterAction = (userEmail,client,access_token)=>{
  return function(dispatch){
    const headers = {
      uid: userEmail,
      client: client,
      'access-token': access_token,
    }

    axios.get('https://qanew.lawclerk.p2klabs.com/api/v1/dropdowns/states_list_for_subscription',{headers:headers})
    .then(res => {
      console.log(res.data.states);
      const data = res.data.states
      dispatch(FilterSuccess(data));


  })
  .catch(error => {
      console.log(error);
  });
  };
};


export const FilterSuccess = (data,response)=>({
  type:ActionType.FILTER_SUCCESS,
      payload:data,



});
