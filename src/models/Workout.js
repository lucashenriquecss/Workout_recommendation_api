const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class WorkoutModel {
  constructor(id, name, suitableAges,notSuitableInjuries, notSuitableComorbidities) {
    this.id = id;
    this.name = name;
    this.suitableAges = suitableAges;
    this.notSuitableInjuries = notSuitableInjuries;
    this.notSuitableComorbidities = notSuitableComorbidities;
  }
}



const  workoutSequelize = sequelize.define('Workout', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  suitableAges: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  notSuitableInjuries: {
    type: DataTypes.JSON,
    allowNull: false
  },
  notSuitableComorbidities: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

module.exports = {workoutSequelize, WorkoutModel};
