const Sequelize = require('sequelize');

const conn = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/music_api_testing_db',
  {
    logging: false,
  }
);

module.exports = conn;
