import * as ActionType from './ActionType'
export const toggleHomeAddSheet = (show, Blur) => {
    return function (dispatch) {
      dispatch(ShowHomeAddSheetSuccess(show));
      if (Blur) {
        dispatch(ShowBlurViewSucces(show));
      }
    };
  };
  export const toggleSideMenu = (show, Blur) => {
    return function (dispatch) {
      dispatch(toggleSideMenuSuccess(show));
    };
  };
  
  const toggleSideMenuSuccess = show => {
    return {
      type: ActionType.SIDE_MENU,
      payload: show,
    };
  };
export const toggleCustomPicker = (show, Blur) => {
    return function (dispatch) {
        dispatch(ToggleCustomPickerSuccess(show));
        if (Blur) {
            dispatch(ShowBlurViewSucces(show));
        }
    };
};

const ShowHomeAddSheetSuccess = show => {
    return {
      type: ActionType.SHOW_HOME_SUCCESS,
      payload: show,
    };
  };

const ToggleCustomPickerSuccess = show => {
    return {
        type: ActionType.PICKER_SUCCESS,
        payload: show,
    };
};

const ShowBlurViewSucces = show => {
    return {
        type: ActionType.BLUR_SUCCESS,
        payload: show,
    };
};