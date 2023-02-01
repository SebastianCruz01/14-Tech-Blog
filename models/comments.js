// This file defines the Comments model.

const {Model, DataTypes} = require('sequelize');   // This is used to call the Model and DataTypes modules
const sequelize = require('../config/connection'); // This is used to call the sequelize connection

class Comments extends Model {}                    // This is used to define the Comments model

Comments.init(                                     // This is used to initialize the Comments model
    {
        id: {                                       // This is used to define the id column
            type: DataTypes.INTEGER,                // This is used to define the type
            primaryKey: true,                       // This is used to define the primary key
            autoIncrement: true                     // This is used to define the auto increment
        },
        comment_text: {                             // This is used to define the comment_text column
            type: DataTypes.STRING,                 // This is used to define the type
            allowNull: false,                       // This is used to define the allowNull
            validate: {                             // This is used to define the validation
                len: [1]                            // This is used to define the length
            }
        },
        user_id: {                           // This is used to define the user_id column
            type: DataTypes.INTEGER,         // This is used to define the type
            allowNull: false,                // This is used to define the allowNull
            references: {                    // This is used to define the references
              model: 'user',                 // This is used to define the model
              key: 'id'                      // This is used to define the key
            }
          },
          post_id: {                        // This is used to define the post_id column
            type: DataTypes.INTEGER,        // This is used to define the type
            allowNull: false,               // This is used to define the allowNull
            references: {                   // This is used to define the references
              model: 'post',                // This is used to define the model
              key: 'id'                     // This is used to define the key
            }
          }
        },
        {
          sequelize,                       // This is used to define the sequelize
          freezeTableName: true,           // This is used to define the freezeTableName
          underscored: true,               // This is used to define the underscored
          modelName: 'comment'             // This is used to define the modelName
        }
      );
      
      module.exports = Comment;             // This is used to export the Comments model