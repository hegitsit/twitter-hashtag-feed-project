import React, { Fragment, useContext } from 'react'
import SingleTweet from '../SingleTweet/SingleTweet';
import TwitterContext from '../../context/twitter/twitterContext';

const Tweets = () => {
  const twitterContext = useContext(TwitterContext);
  const { tweets } = twitterContext;

  return (
    <Fragment>
      {tweets.map((tweet, index) => (
        <SingleTweet key={index} tweetData={tweet} />
      ))}
    </Fragment>
  )
}

export default Tweets
