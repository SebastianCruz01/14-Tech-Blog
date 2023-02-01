// This is used to define the Post model

const {Model , DataTypes} = require('sequelize'); // This is used to call the Model and DataTypes modules
const sequelize = require('../config/connection'); // This is used to call the sequelize connection

class Post extends Model {} // This is used to define the Post model

Post.init(                  // This is used to initialize the Post model
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      post_text: {
        type: DataTypes.STRING,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );

  
  module.exports = Post;