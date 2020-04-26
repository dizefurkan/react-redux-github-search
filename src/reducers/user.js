import {
  FETCH_USER_PENDING,
  FETCH_USER_RESOLVED,
  FETCH_USER_REJECTED,
  FETCH_USER_REPOS_PENDING,
  FETCH_USER_REPOS_RESOLVED,
  FETCH_USER_REPOS_REJECTED,
  FETCH_USER_FOLLOWERS_PENDING,
  FETCH_USER_FOLLOWERS_RESOLVED,
  FETCH_USER_FOLLOWERS_REJECTED,
  FETCH_USER_FOLLOWINGS_PENDING,
  FETCH_USER_FOLLOWINGS_RESOLVED,
  FETCH_USER_FOLLOWINGS_REJECTED,
} from '../actions/user';

const initialState = {
  status: '',
  error: null,
  user: {},
  repos: {
    status: '',
    error: null,
    repos: [],
  },
  followers: {
    status: '',
    error: null,
    followers: [],
  },
  followings: {
    status: '',
    error: null,
    followings: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PENDING: {
      return {
        ...state,
        status: 'pending',
      };
    }
    case FETCH_USER_RESOLVED: {
      return {
        ...state,
        status: 'resolved',
        user: action.payload.user,
      };
    }
    case FETCH_USER_REJECTED: {
      return {
        ...state,
        status: 'rejected',
        error: action.payload.error,
      };
    }
    case FETCH_USER_REPOS_PENDING: {
      return {
        ...state,
        repos: {
          ...state.repos,
          status: 'pending',
        },
      };
    }
    case FETCH_USER_REPOS_RESOLVED: {
      return {
        ...state,
        repos: {
          ...state.repos,
          status: 'resolved',
          repos: action.payload.repos,
        },
      };
    }
    case FETCH_USER_REPOS_REJECTED: {
      return {
        ...state,
        repos: {
          ...state.repos,
          status: 'rejected',
          error: action.payload.error,
        }
      };
    }
    case FETCH_USER_FOLLOWERS_PENDING: {
      return {
        ...state,
        followers: {
          ...state.followers,
          status: 'pending',
        },
      };
    }
    case FETCH_USER_FOLLOWERS_RESOLVED: {
      return {
        ...state,
        followers: {
          ...state.followers,
          status: 'resolved',
          followers: action.payload.followers,
        },
      };
    }
    case FETCH_USER_FOLLOWERS_REJECTED: {
      return {
        ...state,
        followers: {
          ...state.followers,
          status: 'rejected',
          error: action.payload.error,
        },
      };
    }
    case FETCH_USER_FOLLOWINGS_PENDING: {
      return {
        ...state,
        followings: {
          ...state.followings,
          status: 'pending',
        },
      };
    }
    case FETCH_USER_FOLLOWINGS_RESOLVED: {
      return {
        ...state,
        followings: {
          ...state.followings,
          status: 'resolved',
          followings: action.payload.followings,
        },
      };
    }
    case FETCH_USER_FOLLOWINGS_REJECTED: {
      return {
        ...state,
        followings: {
          ...state.followings,
          status: 'rejected',
          error: action.payload.error,
        },
      };
    }
    default:
      return state;
  }
};