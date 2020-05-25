import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import Tweets from './components/Tweets/Tweets';
import TwitterState from '../src/context/twitter/TwitterState';

function App() {
  return (
    <TwitterState>
      <div className="container">
        <h1 className="app-header">Welcome! What hashtag would you like to search for on twitter?</h1>
        <Search />
        <Tweets />
      </div>
    </TwitterState>
  );
}

export default App;
