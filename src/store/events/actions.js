import * as actionTypes from './actionTypes';

export const fetchEvents = () => {
  return { type: actionTypes.FETCH };
};

export const fetchEventsSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    payload,
  };
};

export const fetchEventsFailure = (payload) => {
  return {
    type: actionTypes.FETCH_FAILURE,
    payload,
  };
};
