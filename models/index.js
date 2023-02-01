// This file is used to create associations between models

const User = require('./user');                 // This is used to call the User model
const Post = require('./post');                 // This is used to call the Post model
const Comment = require('./comment');           // This is used to call the Comment model

User.hasMany(Post, {                            // This is used to define the association between the User and Post models
    foreignKey: 'user_id',
});

Post.belongsTo(User, {                         // This is used to define the association between the Post and User models
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {                     // This is used to define the association between the Comment and User models
    foreignKey: 'user_id',
});

Comment.belongsTo(Post, {                    // This is used to define the association between the Comment and Post models
    foreignKey: 'post_id',
});

User.hasMany(Comment, {                      // This is used to define the association between the User and Comment models
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {                      // This is used to define the association between the Post and Comment models 
    foreignKey: 'post_id',
});

module.exports = { User, Post, Comment };   // This is used to export the User, Post, and Comment models
