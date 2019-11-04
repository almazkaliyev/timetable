import scheduleService from '../../services/scheduleService';

export const SCHEDULE_REQUEST = 'SCHEDULE_REQUEST';
export const SCHEDULE_SUCCESS = 'SCHEDULE_SUCCESS';
export const SCHEDULE_CHANGE_INDEX = 'SCHEDULE_CHANGE_INDEX';

export const fetchSchedule = () => {
  return (dispatch) => {
    dispatch(request());

    return scheduleService.getSchedule()
        .then(schedule => dispatch(success(schedule)));
  };

  function request() {
    return {
      type: SCHEDULE_REQUEST,
    }
  }

  function success(schedule) {
    return {
      type: SCHEDULE_SUCCESS,
      payload: schedule
    }
  }
};

export const changeIndex = (value) => {
  return {
    type: SCHEDULE_CHANGE_INDEX,
    index: value
  }
};
