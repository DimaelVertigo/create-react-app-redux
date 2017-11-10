import {SET_YEAR} from '../constants/Page/';

export const setYear = year => {
  return {
    type: SET_YEAR,
    payload: year
  };
}