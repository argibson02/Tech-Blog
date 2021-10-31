const User = require('./User');
const Article = require('./Article');
const Comment = require('./Comment');

// User to Article relationship
User.hasMany(Article, {
  foreignKey: 'user_id',
});

Article.belongsTo(User, {
  foreignKey: 'user_id',
});

// User to Comment relationship
User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

// Article to Comment relationship
Article.hasMany(Comment, {
  foreignKey: 'article_id',
});

Comment.belongsTo(Article, {
  foreignKey: 'article_id',
});

module.exports = { User, Article, Comment };
