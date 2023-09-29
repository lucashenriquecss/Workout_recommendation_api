const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class UserWorkoutModel {
  constructor(id, workout,) {
    this.id = id;
    this.workout = workout;
  }
}



const userWorkoutSequelize = sequelize.define('User_Workout', {
    workout: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});


module.exports = {userWorkoutSequelize, UserWorkoutModel};
