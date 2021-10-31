const { Comment } = require('../models');

const commentData = [
  {
    description: 'Blossoming Apricot 1',
    author: 'Person2',
    timestamp: 'May 30, 2021',
    article_id: 1,
    user_id: 2
  },
  {
    description: 'Blossoming Apricot 2',
    author: 'Person1',
    timestamp: 'May 30, 2021',
    article_id: 1,
    user_id: 1
  },
  {
    description: 'Blossoming Apricot 3',
    author: 'Person2',
    timestamp: 'May 30, 2021',
    article_id: 1,
    user_id: 2
  },
  {
    description: 'Blossoming Apricot 4',
    author: 'Person1',
    timestamp: 'May 30, 2021',
    article_id: 2,
    user_id: 1
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
