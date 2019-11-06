import scheduleService from '../../services/scheduleService';

export const SCHEDULE_REQUEST = 'SCHEDULE_REQUEST';
export const SCHEDULE_SUCCESS = 'SCHEDULE_SUCCESS';
export const SCHEDULE_SET_INDEX = 'SCHEDULE_SET_INDEX';

function request() {
  return {
    type: SCHEDULE_REQUEST,
  };
}

function success(schedule) {
  return {
    type: SCHEDULE_SUCCESS,
    payload: schedule,
  };
}

export const fetchSchedule = () => {
  return dispatch => {
    dispatch(request());

    return scheduleService.getSchedule().then(schedule => dispatch(success(schedule)));
  };
};

export const setIndex = index => {
  return {
    type: SCHEDULE_SET_INDEX,
    payload: index,
  };
};
