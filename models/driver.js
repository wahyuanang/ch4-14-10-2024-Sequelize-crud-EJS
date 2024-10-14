'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Driver.init({
    name: DataTypes.STRING,
    license_number: DataTypes.INTEGER,
    contact: DataTypes.INTEGER
  }, 
  {
    sequelize,
    modelName: 'Driver',
    timestamps: false
  });
  return Driver;
};