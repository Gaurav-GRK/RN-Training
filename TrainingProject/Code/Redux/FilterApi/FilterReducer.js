import * as ActionType from './ActionTypes'
const iniitialState={
  data:''
}

const FilterReducer = (state = iniitialState, action) => {
  switch (action.type) {
      case ActionType.FILTER_SUCCESS:
          return {
              ...state,
              data: action.payload,
          }
          
      default:
          return state
  }
}
export default FilterReducer