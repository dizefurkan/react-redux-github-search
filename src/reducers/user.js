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
  FETCH_USER_FOLLOWING_PENDING,
  FETCH_USER_FOLLOWING_RESOLVED,
  FETCH_USER_FOLLOWING_REJECTED,
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
  following: {
    status: '',
    error: null,
    following: [],
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
    case FETCH_USER_FOLLOWING_PENDING: {
      return {
        ...state,
        following: {
          ...state.following,
          status: 'pending',
        },
      };
    }
    case FETCH_USER_FOLLOWING_RESOLVED: {
      return {
        ...state,
        following: {
          ...state.following,
          status: 'resolved',
          following: action.payload.following,
        },
      };
    }
    case FETCH_USER_FOLLOWING_REJECTED: {
      return {
        ...state,
        following: {
          ...state.following,
          status: 'rejected',
          error: action.payload.error,
        },
      };
    }
    default:
      return state;
  }
};