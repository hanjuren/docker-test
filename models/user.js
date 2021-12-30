'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // 관계 정의는 직접 해야함.
    }
  };
  User.init({
    email: {
      DataTypes.STRING,
      allowNull: false,
    },
    password: {
      DataTypes.STRING,
      allowNull: false,
    },
    nick_name: {
      DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};