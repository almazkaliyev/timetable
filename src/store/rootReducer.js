import { combineReducers } from 'redux';
import ui from './ui/reducer';
import lists from './lists/reducer';
import events from './events/reducer';

export default combineReducers({
  ui,
  lists,
  events,
});
