const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var Twit = require('twit');
var config = require('./twitter-api-config/config');
var T = new Twit(config);


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/tweet_hashtags', (req, res) => {
  T.get('search/tweets', { q: `#${req.query.text}`, count: 30 }, function (err, data, response) {
    res.send(data);
  })
});