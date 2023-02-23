/* eslint-disable prettier/prettier */
/* eslint-disable no-unreachable */
/* eslint-disable prettier/prettier */
import * as ActionType from './LoginActionTypes';

const initialState = {

    email : '',

};

 const loginReducer = (state = initialState, action) => {
    switch (action.type){
        case ActionType.UPDATE_EVENT:
            return {
                ...state,
                email : action.email,
            };
            break;
        default:
            return state;
    }
};

export default loginReducer;
