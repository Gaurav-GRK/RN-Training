import axios from "axios";
import * as ActionType from './ActionTypes'
import { log } from "react-native-reanimated";

var FormData = require('form-data');
export const stateList = (userEmail,client,access_token)=>{
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
export const applicationPeriodListAction = (userEmail, access_token, client) => {
	return function (dispatch) {
		const headers = {
			uid: userEmail,
			client: client,
			'access-token': access_token
		};
		axios
			.get('https://qanew.lawclerk.p2klabs.com/api/v1/dropdowns/application_periods_list', { headers: headers })
			.then(res => {
				var applicationPeriod = getMappedDictFromArray(res?.data?.application_period ?? [], false);
				dispatch(dataReceivedSuccess(applicationPeriod, ActionType.APPLICATION_PERIOD_SUCCESS));
			})
			.catch(error => {
				console.log(error);
			});
	};
};
export const industriesListAction = (userEmail, access_token, client) => {
	return function (dispatch) {
		const headers = {
			uid: userEmail,
			client: client,
			'access-token': access_token
		};
		axios
			.get('https://qanew.lawclerk.p2klabs.com/api/v1/dropdowns/area_of_laws', { headers: headers })
			.then(res => {
				var applicationPeriod = getMappedDictFromArrayWithOtherKeys(res?.data?.area_of_laws ?? [], false);
				dispatch(dataReceivedSuccess(applicationPeriod, ActionType.INDUSTRIES_LIST));
			})
			.catch(error => {
				console.log(error);
			});
	};
};
export const projectTypeAction = (userEmail, access_token, client) => {
	return function (dispatch) {
		const headers = {
			uid: userEmail,
			client: client,
			'access-token': access_token
		};
		axios
			.get('https://qanew.lawclerk.p2klabs.com/api/v1/dropdowns/project_type', { headers: headers })
			.then(res => {
				var applicationPeriod = getMappedDictFromArray(res?.data?.project_type ?? [], false);
				dispatch(dataReceivedSuccess(applicationPeriod, ActionType.PROJECT_TYPE));
			})
			.catch(error => {
				console.log(error);
			});
	};
};
export const skillLevelListAction = (userEmail, access_token, client) => {
	return function (dispatch) {
		
		const headers = {
			uid: userEmail,
			client: client,
			'access-token': access_token
		};
		axios
			.get('https://qanew.lawclerk.p2klabs.com/api/v1/dropdowns/skill_levels_list', { headers: headers })
			.then(res => {
				var applicationPeriod = getMappedDictFromArray(res?.data?.skill_levels ?? [], false);
				
				dispatch(dataReceivedSuccess(applicationPeriod, ActionType.SKILL_LEVEL_LIST));
			})
			.catch(error => {
				console.log(error);
			});
	};
};
export const projectTypeListAction = (userEmail, access_token, client) => {
	return function (dispatch) {
		const headers = {
			uid: userEmail,
			client: client,
			'access-token': access_token
		};
		axios
			.get('https://qanew.lawclerk.p2klabs.com/api/v1/dropdowns/project_types_list', { headers: headers })
			.then(res => {
				var applicationPeriod = getMappedDictFromArray(res?.data?.project_types ?? [], false);
				
				dispatch(dataReceivedSuccess(applicationPeriod, ActionType.PROJECT_TYPES_LIST));
			})
			.catch(error => {
			console.log(error);
			});
	};
};
export const teamMemberListAction = (userEmail, access_token, client) => {
	return function (dispatch) {
		const headers = {
			uid: userEmail,
			client: client,
			'access-token': access_token
		};
		axios
			.get('https://qanew.lawclerk.p2klabs.com/api/v1/dropdowns/team_member_list', { headers: headers })
			.then(res => {
				var applicationPeriod = getMappedDictFromArrayForTeam(res?.data?.team_member_list ?? []);
				dispatch(dataReceivedSuccess(applicationPeriod, ActionType.TEAM_MEMBERS_LIST));
			})
			.catch(error => {
				console.log(error);
			});
	};
};
export const postProjectAction = (userEmail, access_token, client, formData, params, callback) => {
	return function (dispatch) {
		
		const headers = {
			uid: userEmail,
			client: client,
			'access-token': access_token	
		};

		var config = {
			method: 'post',
			url: 'https://qanew.lawclerk.p2klabs.com/api/v1/project_steps/update',
			headers: headers,
			data: formData ?? FormData(),
			params: params
		};
console.log(config)
		axios(config)
			.then(res => {
				var applicationPeriod = res?.data?.project ?? [];
				var clientToken = res?.data?.client_token
				console.log(res);
				dispatch(dataReceivedSuccess(applicationPeriod, ActionType.UPDATE_PROJECT));
				dispatch(dataReceivedSuccess(clientToken, ActionType.UPDATE_CLIENT_TOKEN))
				callback(applicationPeriod, true);
			})
			.catch(error => {
				console.log(error);
				callback(getErrorMessage(error), false);
			});
	};
};
export const projectDetailAction = (userEmail, access_token, client, id, isNew, step, callback) => {
	return function (dispatch) {
		var body = !!id ? { project_id: id, id: step ?? 'about' } : !!isNew ? { new: true, id: step ?? 'about' } : {};
		const headers = {
			uid: userEmail,
			client: client,
			'access-token': access_token
		};

		axios
			.get('https://qanew.lawclerk.p2klabs.com/api/v1/project_steps/show?project_id=210998&id=about', { params: body, headers: headers })
			.then(res => {
				var applicationPeriod = !!res?.data?.project ? res?.data?.project : {};
				var clientToken = res?.data?.client_token
				
				dispatch(dataReceivedSuccess(applicationPeriod, ActionType.SHOW_PROJECT));
				dispatch(dataReceivedSuccess(clientToken, ActionType.UPDATE_CLIENT_TOKEN));
				callback(applicationPeriod, true);
			})
			.catch(error => {
				callback(getErrorMessage(error), false);
				
			});
	};
};
export const getAllProjectsForConflictAction = (userEmail, access_token, client) => {
	return function (dispatch) {
		
		const headers = {
			uid: userEmail,
			client: client,
			'access-token': access_token
		};

		axios
			.get('https://qanew.lawclerk.p2klabs.com/api/v1/project_conflicts/get_all_projects_for_conflicts', { headers: headers })
			.then(res => {
				var data = getMappedDictFromArray(res?.data?.projects ?? [], false);
				
				dispatch(dataReceivedSuccess(data, ActionType.GET_ALL_PROJECTS_FOR_CONFLICTS));
			})
			.catch(error => {
				callback(getErrorMessage(error), false);
				
			});
	};
};
export const assignAction = (userEmail, access_token, client, params, callback) => {
	return function (dispatch) {
		
		const headers = {
			uid: userEmail,
			client: client,
			'access-token': access_token
		};

		var config = {
			method: 'get',
			url: 'https://qanew.lawclerk.p2klabs.com/api/v1/projects/assign',
			headers: headers,
			
			params: params
		};

		axios(config)
			.then(res => {
				var applicationPeriod = res?.data ?? [];
				
				dispatch(dataReceivedSuccess(applicationPeriod, ActionType.ASSIGN_PROJECT));
				callback(applicationPeriod, true);
			})
			.catch(error => {
				
				callback(error?.response?.data?.message, false);
			});
	};
};
export const getConflictAction = (userEmail, access_token, client, id, targetID) => {
	return function (dispatch) {
		var body = { target_id: targetID, current_project_id: id};
		
		const headers = {
			uid: userEmail,
			client: client,
			'access-token': access_token
		};

		axios
			.get('https://qanew.lawclerk.p2klabs.com/api/v1/project_conflicts/get_conflicts', {params:body, headers: headers })
			.then(res => {
				console.log(res);
				var applicationPeriod = res?.data ?? [];
				
				dispatch(dataReceivedSuccess(applicationPeriod, ActionType.GET_CONFLICTS));
				callback(applicationPeriod, true);
			})
			.catch(error => {

				callback(getErrorMessage(error), false);
				
			});
	};
};
export const setConflictAction = (userEmail, access_token, client, formData, callback) => {
	return function (dispatch) {
		
		const headers = {
			uid: userEmail,
			client: client,
			'access-token': access_token
		};

		var config = {
			method: 'post',
			url: 'https://qanew.lawclerk.p2klabs.com/api/v1/project_conflicts/set_conflicts',
			headers: headers,
			data: formData ?? FormData()
		};

		axios(config)
			.then(res => {
				console.log(res);
				var applicationPeriod = res?.data ?? [];
				
				dispatch(dataReceivedSuccess(applicationPeriod, ActionType.SET_CONFLICTS));
				callback(applicationPeriod, true);
			})
			.catch(error => {
				console.log(error)
				
				callback(getErrorMessage(error), false);
			});
	};
};
export const conflictAction = (userEmail, access_token, client, id) => {
	return function (dispatch) {
		var body = { id: id };
		
		const headers = {
			uid: userEmail,
			client: client,
			'access-token': access_token
		};

		axios
			.get('https://qanew.lawclerk.p2klabs.com/api/v1/project_conflicts/conflicts', { params: body, headers: headers })
			.then(res => {
				var applicationPeriod = res?.data ?? [];
				
				dispatch(dataReceivedSuccess(applicationPeriod, ActionType.CONFLICTS));
				callback(applicationPeriod, true);
			})
			.catch(error => {
				callback(getErrorMessage(error), false);
				
			});
	};
};
export const clearConflicts = () => {
	return function (dispatch) {
		dispatch(dataReceivedSuccess(null, ActionType.GET_CONFLICTS))
		dispatch(dataReceivedSuccess(null, ActionType.CONFLICTS))
	}
}

export const teamDetailAction = (userEmail, access_token, client, id, isNew, step, callback) => {
	return function (dispatch) {
		var body = !!id ? { team_id: id, id: step ?? 'about' } : !!isNew ? { new: true, id: step ?? 'about' } : {};
		
		const headers = {
			uid: userEmail,
			client: client,
			'access-token': access_token
		};

		axios
			.get('https://qanew.lawclerk.p2klabs.com/api/v1/team_steps/show?new=true' ,{ params: body, headers: headers })
			.then(res => {
				var data = !!res?.data?.team ? res?.data?.team : {};
				// var clientToken = res?.data?.client_token
			
				dispatch(dataReceivedSuccess(data, ActionType.SHOW_TEAM));
				// dispatch(dataReceivedSuccess(clientToken, ActionType.UPDATE_CLIENT_TOKEN));
				callback(data, true);
			})
			.catch(error => {
				callback(getErrorMessage(error), false);
				
			});
	};
};
export const postTeamAction = (userEmail, access_token, client, formData, params, callback) => {
	return function (dispatch) {
		
		const headers = {
			uid: userEmail,
			client: client,
			'access-token': access_token
		};

		var config = {
			method: 'post',
			url: 'https://qanew.lawclerk.p2klabs.com/api/v1/team_steps/update',
			headers: headers,
			data: formData ?? FormData(),
			params: params
		};

		axios(config)
			.then(res => {
				var data = res?.data?.team ?? [];
				// var clientToken = res?.data?.client_token
				
				dispatch(dataReceivedSuccess(data, ActionType.UPDATE_POST_TEAM));
				// dispatch(dataReceivedSuccess(clientToken, ActionType.UPDATE_CLIENT_TOKEN))
				callback(data, true);
			})
			.catch(error => {
				
				callback(getErrorMessage(error), false);
			});
	};
};
const getMappedDictFromArrayForTeam = arr => {
	let lawclerks = [];
	arr.map(item => {
		item.lawclerks.map(lc => {
			lc.team_name = item.team_name
		})
		lawclerks = [...lawclerks, ...item.lawclerks];
	});
	const lcMapped = lawclerks.map(item => {
		return {
			title: item.team_name + ' : ' + item.value,
			value: item.id,
			data: item
		};
	});
	return lcMapped;
};
const getMappedDictFromArrayWithOtherKeys = arr => {
	let arrMapped = arr.map(item => {
		return {
			title: item.value,
			value: item.id,
			data: item
		};
	});
	return arrMapped;
};
const getMappedDictFromArray = (arr, isInverted) => {
	let arrMapped = arr.map(item => {
		return {
			title: isInverted ? item[1] : item[0],
			value: isInverted ? item[0] : item[1],
			data: item
		};
	});
	return arrMapped;
};
const dataReceivedSuccess = (data, type) => {
	return {
		type: type,
		payload: data
	};
};
const getErrorMessage = error => {
	return error?.response?.data?.errors[Object.keys(error?.response?.data?.errors)[0]][0] ?? 'Something went wrong!!';
};

export const FilterSuccess=(data,res)=>{
  return{
    type:ActionType.FILTER_SUCCESS,
    payload:data,
  }
}