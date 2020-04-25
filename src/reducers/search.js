import {
  SEARCH_PENDING,
  SEARCH_RESOLVED,
  SEARCH_REJECTED
} from '../actions/search';

const initialState = {
  items: [],
  pending: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PENDING: {
      return {
        ...state,
        pending: true,
      };
    }
    case SEARCH_RESOLVED: {
      return {
        ...state,
        pending: false,
        items: action.payload.items,
      };
    }
    case SEARCH_REJECTED: {
      return {
        ...state,
        pending: false,
        error: action.payload.error,
        items: [],
      };
    }
    default:
      return state;
  }
};
