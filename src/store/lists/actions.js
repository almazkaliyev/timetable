import * as actionTypes from './actionTypes';
import * as api from '../../api';

const fetch = () => {
  return { type: actionTypes.FETCH };
};

const fetchListsSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    payload,
  };
};

const fetchLists = () => dispatch => {
  dispatch(fetch());

  return api.getLists()
    .then(lists => dispatch(fetchListsSuccess(lists)));
};

export default fetchLists;
