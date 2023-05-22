const sequelize = require('../config/connection');
const seedBlogPosts = require('./blogPostData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedBlogPosts();

  process.exit(0);
};

seedAll();