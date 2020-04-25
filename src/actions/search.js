import axios from 'axios';
import { urls } from '../configs';

export const SEARCH_PENDING = 'SEARCH_PENDING';
export const SEARCH_RESOLVED = 'SEARCH_RESOLVED';
export const SEARCH_REJECTED = 'SEARCH_REJECTED';

const searchPending = () => ({
  type: SEARCH_PENDING,
});

const searchResolved = (items) => ({
  type: SEARCH_RESOLVED,
  payload: {
    items,
  },
});

const searchRejected = (error) => ({
  type: SEARCH_REJECTED,
  payload: {
    error,
  },
});

export const search = (query = '') => {
  return dispatch => {
    dispatch(searchPending());
    return axios({
      url: `${urls.baseUrl}${urls.search}${query}`,
      method: 'GET',
    })
      .then((response) => {
        dispatch(searchResolved(response.data.items));
      })
      .catch((error) => {
        dispatch(searchRejected(error));
      })
  }
};