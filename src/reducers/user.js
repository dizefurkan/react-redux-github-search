import {
  FETCH_USER_PENDING,
  FETCH_USER_RESOLVED,
  FETCH_USER_REJECTED,
} from '../actions/user';

const initialState = {
  pending: false,
  error: null,
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PENDING: {
      return {
        ...state,
        pending: true,
      };
    }
    case FETCH_USER_RESOLVED: {
      return {
        ...state,
        pending: false,
        user: action.payload.user,
      };
    }
    case FETCH_USER_REJECTED: {
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};