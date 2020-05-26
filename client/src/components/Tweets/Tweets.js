import React, { useContext } from 'react'
import SingleTweet from '../SingleTweet/SingleTweet';
import TwitterContext from '../../context/twitter/twitterContext';
import './Tweets.css';

const Tweets = () => {
  const twitterContext = useContext(TwitterContext);
  const { tweets } = twitterContext;

  return (
    <div className="tweets-list">
      {tweets.map((tweet, index) => (
        <SingleTweet key={index} tweetData={tweet} />
      ))}
    </div>
  )
}

export default Tweets
