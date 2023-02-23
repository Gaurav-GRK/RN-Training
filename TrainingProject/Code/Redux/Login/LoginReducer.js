import * as ActionType from './LoginTypes'

const iniitialState = {
   data:''

}

const LoginReducer = (state = iniitialState, action) => {
    switch (action.type) {
        case ActionType.LOGIN_SUCCESS:
            return {
                ...state,
                data: action.payload,
            }
            
        default:
            return state
    }
}
export default LoginReducer