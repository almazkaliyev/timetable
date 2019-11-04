import {
  SCHEDULE_REQUEST,
  SCHEDULE_SUCCESS,
  SCHEDULE_CHANGE_INDEX
} from './actions';

const initialState = {
  schedule: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: []
  },
  loading: false,
  index: 0
};

export default function scheduleReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SCHEDULE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SCHEDULE_SUCCESS:
      return {
        ...state,
        loading: false,
        schedule: action.payload
      };
    case SCHEDULE_CHANGE_INDEX:
      return {
        ...state,
        index: action.index
      };
    default:
      return state;
  }
};