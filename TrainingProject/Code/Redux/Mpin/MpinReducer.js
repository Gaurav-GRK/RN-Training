import * as ActionType from './MpinActionType';

const initialState = {
    first_name : '',
    last_name : '',
    sucess : false,
    email : '',
    mpin_enabled : false,
    message : '',
    mpin : ''
}

const mpinReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionType.MPIN_LOGIN_SUCCESS:
            return{
                ...state,
                first_name : action.first_name,
                last_name : action.last_name,
                sucess : action.sucess,
                email : action.email,
                mpin_enabled : action.mpin_enabled
            };
              default:
            return state;
    }
};

export default mpinReducer;