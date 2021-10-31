const sequelize = require('../config/connection');
const seedArticle = require('./articleData');
const seedComment = require('./commentData');
const seedUser = require('./userData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedArticle();
  await seedUser();
  await seedComment();

  process.exit(0);
};

seedAll();