import * as ActionType from './ActionTypes'
const iniitialState = {
    data:[],
    markData:0
}

const NotificationReducer = (state = iniitialState, action) => {
    switch (action.type) {
        case ActionType.NOTIFICATION_SUCCESS:
            return {
                ...state,
                data: action.data,
                markData:action.markData
            }
            break;
            case ActionType.NOTIFICATION_MARKED:
                return{
                    ...state,  
                }

        default:
            return state
    }
}
export default NotificationReducer