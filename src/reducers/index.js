import {combineReducers} from 'redux';
import auth from './auth';
import page from './page';

export default combineReducers({
  account: combineReducers({
    auth,
  }),

  page
})