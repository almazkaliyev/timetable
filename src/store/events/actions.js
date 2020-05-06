import * as actionTypes from './actionTypes';
import get from '../../service/eventService';

const fetchEvents = () => {
  return { type: actionTypes.FETCH };
};

const fetchEventsSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    payload,
  };
};

const fetchEventsFailure = (payload) => {
  return {
    type: actionTypes.FETCH_FAILURE,
    payload,
  };
};

const getEvents = () => (dispatch) => {
  dispatch(fetchEvents());

  return get()
    .then(result => dispatch(fetchEventsSuccess(result)))
    .catch(error => dispatch(fetchEventsFailure(error)));
};

export default getEvents;
