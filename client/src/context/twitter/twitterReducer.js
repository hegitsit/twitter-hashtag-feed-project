import {
  SEARCH_HASHTAGS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_HASHTAGS:
      return {
        ...state,
        tweets: action.payload,
      };
    default:
      return state;
  }
}