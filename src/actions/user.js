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

export const FETCH_USER_FOLLOWING_PENDING = 'FETCH_USER_FOLLOWING_PENDING';
export const FETCH_USER_FOLLOWING_RESOLVED = 'FETCH_USER_FOLLOWING_RESOLVED';
export const FETCH_USER_FOLLOWING_REJECTED = 'FETCH_USER_FOLLOWING_REJECTED';

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
      url: `${urls.baseUrl}${urls.users}${username}${urls.repos}`,
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
  type: FETCH_USER_FOLLOWERS_PENDING,
});

const fetchUserFollowersResolved = followers => ({
  type: FETCH_USER_FOLLOWERS_RESOLVED,
  payload: {
    followers
  }
});

const fetchUserFollowersRejected = error => ({
  type: FETCH_USER_FOLLOWERS_REJECTED,
  payload: {
    error
  }
});

export const fetchUserFollowers = (username = '') => {
  return dispatch => {
    dispatch(fetchUserFollowersPending());

    return axios({
      url: `${urls.baseUrl}${urls.users}${username}${urls.followers}`,
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

const fetchUserFollowingPending = () => ({
  type: FETCH_USER_FOLLOWING_PENDING,
});

const fetchUserFollowingResolved = following => ({
  type: FETCH_USER_FOLLOWING_RESOLVED,
  payload: {
    following
  }
});

const fetchUserFollowingRejected = error => ({
  type: FETCH_USER_FOLLOWING_REJECTED,
  payload: {
    error
  }
});

export const fetchUserFollowing = (username = '') => {
  return dispatch => {
    dispatch(fetchUserFollowingPending());

    return axios({
      url: `${urls.baseUrl}${urls.users}${username}${urls.following}`,
      method: 'GET',
    })
      .then((response) => {
        dispatch(fetchUserFollowingResolved(response.data));
      })
      .catch((error) => {
        dispatch(fetchUserFollowingRejected(error));
      });
  }
};