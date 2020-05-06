import * as actionTypes from './actionTypes';

const initialState = {
  mode: localStorage.getItem('mode') || 'light',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case actionTypes.SET_THEME: {
    const newTheme = action.payload;
    window.localStorage.setItem('mode', newTheme);
    document.body.className = newTheme;
    return {
      mode: newTheme,
    };
  }
  case actionTypes.SWITCH_THEME: {
    const newTheme = state.mode === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('mode', newTheme);
    document.body.className = newTheme;
    return {
      mode: newTheme,
    };
  }
  default:
    return state;
  }
};
