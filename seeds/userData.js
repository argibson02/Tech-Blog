const { User } = require('../models');

const userData = [
    {
        name: "Fry",
        email: "fry@gmail.com",
        password: "password",
        article_id: [1],
        comment_id: [2, 4]
      },
      {
        name: "Person2",
        email: "person2@gmail.com",
        password: "password",
        article_id: [2],
        comment_id: [1, 3]
      },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
