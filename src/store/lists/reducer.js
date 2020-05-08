import * as actionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  items: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case actionTypes.FETCH:
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  case actionTypes.FETCH_SUCCESS:
    return {
      ...state,
      isLoading: false,
      items: action.payload,
      error: null,
    };
  case actionTypes.FETCH_FAILURE:
    return {
      ...state,
      isLoading: false,
      items: [],
      error: action.payload,
    };
  default:
    return { ...state };
  }
};
