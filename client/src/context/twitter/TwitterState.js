
import React, { useReducer } from 'react';
import TwitterContext from './twitterContext';
import TwitterReducer from './twitterReducer';
import { SEARCH_HASHTAGS } from '../types';
import axios from 'axios';

const TwitterState = props => {
  const initialState = {
    tweets: []
  }

  const [state, dispatch] = useReducer(TwitterReducer, initialState);

  const searchByHashTags = async (text) => {
    const res = await axios.get(`/tweet_hashtags`, { params: { text: text } });
    dispatch({ type: SEARCH_HASHTAGS, payload: res.data.statuses })

  }

  return <TwitterContext.Provider
    value={{
      tweets: state.tweets,
      searchByHashTags,
    }}
  >
    {props.children}
  </TwitterContext.Provider>

}
export default TwitterState;
