import React, { useState, useContext, Fragment } from 'react'
import TwitterContext from '../../context/twitter/twitterContext';
import './Search.css';

const Search = () => {
  const twitterContext = useContext(TwitterContext);
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();

    var newText = text.replace(/\s/g, '');
    twitterContext.searchByHashTags(newText)
    setText('');
  }
  return (
    <Fragment>
      <form className="form" onSubmit={onSubmit}>
        <input type="text" name="text" placeholder="Search a hashtag..." value={text} onChange={onChange} />
        {text.length > 1 ? <input type="submit" value="Search" className="btn btn-search" /> : null}
      </form>
    </Fragment>
  )
}

export default Search;
