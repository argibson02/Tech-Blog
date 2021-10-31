const { User } = require('../models');

const userData = [
    {
        username: "Person1",
        email: "person1@gmail.com",
        password: "password"
      },
      {
        username: "Person2",
        email: "person2@gmail.com",
        password: "password"
      },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
