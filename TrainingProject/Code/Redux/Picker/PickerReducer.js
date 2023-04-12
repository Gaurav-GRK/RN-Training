import * as ActionType from './ActionType';

const initialState = {
    isHomeAddSheetShown: false,
    isBlurViewShown: false,
    showingCustomPicker: false,
    showSideMenu: false,
};
const PickerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SHOW_HOME_SUCCESS:
            return {
                ...state,
                isHomeAddSheetShown: action.payload,
            };
        case ActionType.BLUR_SUCCESS:
            return {
                ...state,
                isBlurViewShown: action.payload,
            };
        case ActionType.PICKER_SUCCESS:
            return {
                ...state,
                showingCustomPicker: action.payload,
            };
        case ActionType.SIDE_MENU:
            return {
                ...state,
                showSideMenu: action.payload,
            };
        default:
            return state;
    }
};

export default PickerReducer;
