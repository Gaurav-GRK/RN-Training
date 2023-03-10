/* eslint-disable prettier/prettier */
import * as ActionType from './FilterActionType';
const iniitialState = {
  FilterAction: null,
};

const FilterReducer = (state = iniitialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_SUCCESS:
      return {
        ...state,
                FilterAction: action.payload,
      };

    default:
      return state;
  }
};
export default FilterReducer;
