import * as ActionType from './ActionTypes'
const iniitialState={
  StateList:null
}

const FilterReducer = (state = iniitialState, action) => {
  switch (action.type) {
      case ActionType.FILTER_SUCCESS:
          return {
              ...state,
              StateList: action.payload  
          }
          
      default:
          return state
  }
}
export default FilterReducer