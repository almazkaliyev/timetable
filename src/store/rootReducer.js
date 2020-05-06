import { combineReducers } from 'redux';
import ui from './ui/reducer';
import events from './events/reducer';

export default combineReducers({
  ui,
  events,
});
