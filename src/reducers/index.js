import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import link from './link';

export default combineReducers({
  routing: routerReducer,
  user,
  link
});