import {SHOW_USERS, SHOW_SERVERS} from '../constants/Page/';

const initialState = {
  page: 'start state'
};

export default function page(state = initialState, action) {
  switch (action.type) {
    case SHOW_SERVERS:
      return {...state, page: action.page};
    case SHOW_USERS:
      return {...state, page: action.page};
    default:
      return state;
  }
};