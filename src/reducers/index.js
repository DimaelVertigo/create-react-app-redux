import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import auth from './auth';
import page from './page';

export default combineReducers({
  router: routerReducer,
  account: combineReducers({
    auth,
  }),
  page
})