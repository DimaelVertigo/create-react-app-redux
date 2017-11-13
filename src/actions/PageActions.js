import {SET_YEAR} from '../constants/Page/';

export const setYear = year => {
  return {
    type: SET_YEAR,
    payload: year + 3000
  };
}
export const sayNo = increment => {
  return {
    type: SET_YEAR,
    payload: increment
  };
}

export const getik = () => {
  return {
    type: 'GETIK',
    payload: {
      username: 'Dima', state: 'male'
    }
  }
}