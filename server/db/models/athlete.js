'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Athlete extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Athlete.init({
    athlete_id: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    bio: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    weight: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    photo_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Athlete',
  });
  return Athlete;
};