'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employees.init(
    {
      // id: DataTypes.INTEGER(10),
      name: DataTypes.STRING(50),
      phone_number: DataTypes.STRING(16),
      jobtitle: DataTypes.STRING(25),
    },
    {
      sequelize,
      modelName: 'Employees',
    }
  );
  return Employees;
};
