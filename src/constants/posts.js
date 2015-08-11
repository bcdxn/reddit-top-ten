'use strict';

var PostsConstants = {
  ActionTypes: {
    REFRESH_POSTS: 'REFRESH_POSTS',
    SET_SUBREDDIT: 'SET_SUBREDDIT'
  },
  REDDIT_POST_API_PREFIX: 'http://www.reddit.com/r/',
  REDDIT_POST_API_POSTFIX: '.json?limit=10'
}

module.exports = PostsConstants;