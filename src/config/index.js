const sequelize = require('./db');



const {userSequelize} = require('../models/User');
const {workoutSequelize} = require('../models/Workout');
const {userWorkoutSequelize} = require('../models/UserWorkout');


userSequelize.hasMany(userWorkoutSequelize, {foreignKey:'userId', as:'workouts'});
userWorkoutSequelize.belongsTo(userSequelize, {foreignKey:'userId'});

async function SyncDb () {
  try {
    await sequelize.sync({ alter:{drop:false}});
    console.log('Tabela criada com sucesso.');
  } catch (error) {
    console.error('Erro ao criar a tabela:', error);
  }
};

module.exports = SyncDb