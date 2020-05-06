import * as actionTypes from './actionTypes';

export const setTheme = payload => {
  return {
    type: actionTypes.SET_THEME,
    payload,
  };
};

export const switchTheme = () => {
  return {
    type: actionTypes.SWITCH_THEME,
  };
};
