const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  logging:false,
  storage: 'workout_recommendation.sqlite', // Nome do arquivo do banco de dados SQLite
});

module.exports = sequelize;
