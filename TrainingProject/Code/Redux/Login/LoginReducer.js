import * as ActionType from './LoginTypes'

const iniitialState = {
    currentEvent : 0,
    first_name : '',
    last_name : '',
    sucess : false,
    id: '',
    email : '',
    stateValue : 0,
    resetMessage : '',
    loginFailedMessage : '',
    access_token : '',
    client : '',
    mpin_enabled : false,
    onProbation: null,
    isInactive : null,
    isFloridaMember: null,
    hasConflicts: null,
    clioMember: false

}

const LoginReducer = (state = iniitialState, action) => {
    switch (action.type) {
        case ActionType.LOGIN_SUCCESS:
            return {
                ...state,
                currentEvent : action.payload,
                first_name : action.first_name,
                last_name : action.last_name,
                sucess : action.sucess,
                email : action.email,
                access_token : action.access_token,
                client : action.client,
                mpin_enabled : action.mpin_enabled,
                id: action.id,
                clioMember: !!action.clio_member
            }
            
        default:
            return state
    }
}
export default LoginReducer