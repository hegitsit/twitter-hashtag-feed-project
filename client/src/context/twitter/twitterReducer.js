import {
  SEARCH_HASHTAGS
} from '../types';

export default (state, action) => {
  console.log(' action.payload,', action.payload)
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