const sequelize = require('../config/connection');
const seedGallery = require('./galleryData');
const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedPaintings();

  process.exit(0);
};

seedAll();


const sequelize = require('../config/connection');
const Dish = require('../models/Article');
const dishData = require('./dish-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Dish.bulkCreate(dishData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
