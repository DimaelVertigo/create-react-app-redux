import {SHOW_SERVERS, SHOW_USERS} from '../constants/Page/';

export const showServers = () => ({
  type: SHOW_SERVERS,
  page: 'servers'
});
export const showUsers = () => ({
  type: SHOW_USERS,
  page: 'users'
});

