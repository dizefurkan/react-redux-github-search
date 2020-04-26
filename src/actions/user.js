import axios from 'axios';
import { urls } from '../configs';

export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';
export const FETCH_USER_RESOLVED = 'FETCH_USER_RESOLVED';
export const FETCH_USER_REJECTED = 'FETCH_USER_REJECTED';

export const FETCH_USER_REPOS_PENDING = 'FETCH_USER_REPOS_PENDING';
export const FETCH_USER_REPOS_RESOLVED = 'FETCH_USER_REPOS_RESOLVED';
export const FETCH_USER_REPOS_REJECTED = 'FETCH_USER_REPOS_REJECTED';

export const FETCH_USER_FOLLOWERS_PENDING = 'FETCH_USER_FOLLOWERS_PENDING';
export const FETCH_USER_FOLLOWERS_RESOLVED = 'FETCH_USER_FOLLOWERS_RESOLVED';
export const FETCH_USER_FOLLOWERS_REJECTED = 'FETCH_USER_FOLLOWERS_REJECTED';

export const FETCH_USER_FOLLOWINGS_PENDING = 'FETCH_USER_FOLLOWINGS_PENDING';
export const FETCH_USER_FOLLOWINGS_RESOLVED = 'FETCH_USER_FOLLOWINGS_RESOLVED';
export const FETCH_USER_FOLLOWINGS_REJECTED = 'FETCH_USER_FOLLOWINGS_REJECTED';

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
      url: `${urls.baseUrl}${urls.users}${username}`,
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

const fetchUserReposPending = () => ({
  type: FETCH_USER_REPOS_PENDING,
});

const fetchUserReposResolved = repos => ({
  type: FETCH_USER_REPOS_RESOLVED,
  payload: {
    repos
  }
});

const fetchUserReposRejected = error => ({
  type: FETCH_USER_REPOS_REJECTED,
  payload: {
    error
  }
});

export const fetchUserRepos = (username = '') => {
  return dispatch => {
    dispatch(fetchUserReposPending());

    return axios({
      url: `${urls.baseUrl}${urls.users}${username}/${urls.repos}`,
      method: 'GET',
    })
      .then((response) => {
        dispatch(fetchUserReposResolved(response.data));
      })
      .catch((error) => {
        dispatch(fetchUserReposRejected(error));
      });
  }
};

const fetchUserFollowersPending = () => ({
  type: FETCH_USER_FOLLOWINGS_PENDING,
});

const fetchUserFollowersResolved = followings => ({
  type: FETCH_USER_FOLLOWINGS_RESOLVED,
  payload: {
    followings
  }
});

const fetchUserFollowersRejected = error => ({
  type: FETCH_USER_FOLLOWINGS_REJECTED,
  payload: {
    error
  }
});

export const fetchUserFollowers = (username = '') => {
  return dispatch => {
    dispatch(fetchUserFollowersPending());

    return axios({
      url: `${urls.baseUrl}${urls.users}${username}/${urls.followers}`,
      method: 'GET',
    })
      .then((response) => {
        dispatch(fetchUserFollowersResolved(response.data));
      })
      .catch((error) => {
        dispatch(fetchUserFollowersRejected(error));
      });
  }
};

const fetchUserFollowingsPending = () => ({
  type: FETCH_USER_FOLLOWERS_PENDING,
});

const fetchUserFollowingsResolved = followers => ({
  type: FETCH_USER_FOLLOWERS_RESOLVED,
  payload: {
    followers
  }
});

const fetchUserFollowingsRejected = error => ({
  type: FETCH_USER_FOLLOWERS_REJECTED,
  payload: {
    error
  }
});

export const fetchUserFollowings = (username = '') => {
  return dispatch => {
    dispatch(fetchUserFollowingsPending());

    return axios({
      url: `${urls.baseUrl}${urls.users}${username}/${urls.followings}`,
      method: 'GET',
    })
      .then((response) => {
        dispatch(fetchUserFollowingsResolved(response.data));
      })
      .catch((error) => {
        dispatch(fetchUserFollowingsRejected(error));
      });
  }
};