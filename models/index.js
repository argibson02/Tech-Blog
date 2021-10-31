const User = require('./User');
// const Gallery = require('./Gallery');
// const Painting = require('./Painting');
const Article = require('./Article');
const Comment = require('./Comment');

// Article to Comment relationship
Article.hasMany(Article, {
  foreignKey: 'comment_id',
});

Comment.belongsTo(Comment, {
  foreignKey: 'comment_id',
});

// User to Article relationship
User.hasMany(Article, {
  foreignKey: 'article_id',
});

Article.belongsTo(User, {
  foreignKey: 'article_id',
});

module.exports = { User, Gallery, Painting, Article, Comment };
