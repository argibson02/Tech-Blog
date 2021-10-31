const { Comment } = require('../models');

const commentData = [
  {
    description: 'Blossoming Apricot',
    author: 'LedyX',
    timestamp: 'May 30, 2021',
    gallery_id: 1,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
