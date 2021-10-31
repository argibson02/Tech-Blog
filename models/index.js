const User = require('./User');
const Gallery = require('./Gallery');
const Painting = require('./Painting');
const Article = require('./Article');
const Comment = require('./Comment');

Article.hasMany(Article, {
  foreignKey: 'gallery_id',
});

Comment.belongsTo(Comment, {
  foreignKey: 'gallery_id',
});



Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Gallery, Painting, Article, Comment };
