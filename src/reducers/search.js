import {
  SEARCH_PENDING,
  SEARCH_RESOLVED,
  SEARCH_REJECTED
} from '../actions/search';

const initialState = {
  items: [],
  status: '',
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PENDING: {
      return {
        ...state,
        status: 'pending',
      };
    }
    case SEARCH_RESOLVED: {
      return {
        ...state,
        status: 'resolved',
        items: action.payload.items,
      };
    }
    case SEARCH_REJECTED: {
      return {
        ...state,
        status: 'rejected',
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};
