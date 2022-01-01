const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post, {
        as: 'posts',
        foreignkey: 'user_id',
      });
    }
  };
  User.init({
    nick_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    underscored: true,
    charset: 'utf8',
    coolate: 'utf8_general_ci',
  });
  return User;
};