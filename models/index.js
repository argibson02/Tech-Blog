const User = require('./User');
const Article = require('./Article');
const Comment = require('./Comment');

// Article to Comment relationship
Article.hasMany(Comment, {
  foreignKey: 'article_id',
});

Comment.belongsTo(Article, {
  foreignKey: 'article_id',
});

// User to Article relationship
User.hasMany(Article, {
  foreignKey: 'article_id',
});

Article.belongsTo(User, {
  foreignKey: 'article_id',
});

// User to Comment relationship
User.hasMany(Comment, {
  foreignKey: 'comment_id',
});

Comment.belongsTo(User, {
  foreignKey: 'comment_id',
});


module.exports = { User, Article, Comment };
