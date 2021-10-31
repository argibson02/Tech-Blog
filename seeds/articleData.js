const { Article } = require('../models');

const articleData = [
  {
    article_title: 'This is a Test Article',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Fry',  // might be able to swap this out for username from USER
    timestamp: 'May 20, 2021 07:00:00',
    user_id: 1,
    comment_id: [1, 2, 3]
  },
  {
    article_title: 'This is a Second Test Article',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Person2',  // might be able to swap this out for username from USER
    timestamp: 'May 24, 2021 09:00:00',
    user_id: 2,
    comment_id: [4]
  },

];

const seedArticle = () => Article.bulkCreate(articleData);

module.exports = seedArticle;
