import React from 'react'
import './SingleTweet.css';

const SingleTweet = ({ tweetData }) => {
  const { user, text } = tweetData;
  console.log('props', user)

  return (
    <div className="wrapper">

      <div className="card radius shadowDepth1">
        <div className="card__image border-tlr-radius">
          <img src={user.profile_banner_url} className="border-tlr-radius" />
        </div>

        <div className="card__content card__padding">
          <article className="card__article">
            <p>{text}</p>
          </article>
        </div>

        <div className="card__action">

          <div className="card__author">
            <img src={user.profile_image_url} alt="user" />
            <div className="card__author-content">
              By <a href="#">{user.name}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleTweet;
