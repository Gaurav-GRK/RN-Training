import axios from "axios";
import * as ActionType from './ActionTypes'
export const stateList = (userEmail,client,access_token,callback)=>{
  return function(dispatch){
    const headers ={
      uid: userEmail,
			client: client,
			'access-token': access_token
    }
    axios.get('https://qanew.lawclerk.p2klabs.com/api/v1/dropdowns/states_list_for_subscription',{headers:headers})
    .then(res=>{
      console.log(res.data.states);
      const data = res.data.states
      dispatch(FilterSuccess(data));
    })
    .catch(error=>{
      console.log(error);
    })
  }
}
/*const mapArray = arr => {
	let arrMapped = arr.map(item => {
		return {
			id: item.value,
			value: item.id,
		};
	});
	return arrMapped;
}*/

export const FilterSuccess=(data,res)=>{
  return{
    type:ActionType.FILTER_SUCCESS,
    payload:data,
  }
}