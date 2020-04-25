import axios from 'axios';
import { urls } from '../configs';

export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';
export const FETCH_USER_RESOLVED = 'FETCH_USER_RESOLVED';
export const FETCH_USER_REJECTED = 'FETCH_USER_REJECTED';

const fetchUserPending = () => ({
  type: FETCH_USER_PENDING,
});

const fetchUserResolved = user => ({
  type: FETCH_USER_RESOLVED,
  payload: {
    user
  }
});

const fetchUserRejected = error => ({
  type: FETCH_USER_REJECTED,
  payload: {
    error
  }
});

export const fetchUser = (username = '') => {
  return dispatch => {
    dispatch(fetchUserPending());

    return axios({
      url: `${urls.baseUrl}${urls.user}${username}`,
      method: 'GET',
    })
      .then((response) => {
        dispatch(fetchUserResolved(response.data));
      })
      .catch((error) => {
        dispatch(fetchUserRejected(error));
      });
  }
};