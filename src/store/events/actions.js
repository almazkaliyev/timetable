import * as actionTypes from './actionTypes';
import * as api from '../../api';

const fetch = () => {
  return { type: actionTypes.FETCH };
};

const fetchEventsSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    payload,
  };
};

export const fetchEvents = () => dispatch => {
  dispatch(fetch());

  return api.getEvents()
    .then(events => dispatch(fetchEventsSuccess(events)));
};

export const fetchEventsByListId = (listId) => dispatch => {
  dispatch(fetchEvents());

  return api.getEventsByListId(listId)
    .then(events => dispatch(fetchEventsSuccess(events)));
};

export const getListEvents = (payload) => {
  return {
    type: actionTypes.GET_LIST_EVENTS,
    payload,
  };
};
