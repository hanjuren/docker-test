const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, {
        as: 'user',
        foreignkey: 'user_id',
      });
    }
  };
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts',
    underscored: true,
    charset: 'utf8',
    coolate: 'utf8_general_ci',
  });
  return Post;
};