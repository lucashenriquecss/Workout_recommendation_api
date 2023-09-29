const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class UserModel {
  constructor(id, name, age,injuries, comorbidities) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.injuries = injuries;
    this.comorbidities = comorbidities;
  }
}



const userSequelize = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  injuries: {
    type: DataTypes.JSON,
    allowNull: false
  },
  comorbidities: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});


module.exports = {userSequelize, UserModel};
