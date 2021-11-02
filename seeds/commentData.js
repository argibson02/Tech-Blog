const { Comment } = require('../models');

const commentData = [
  {
    description: 'In what particular thought to work I know not, But in the gross and scope of my opinion, This bodes some strange eruption to our state.',
    author: 'Person2',
    article_id: 1,
    user_id: 2
  },
  {
    description: 'I think it be no other but een so: Well may it sort that this portentous figure Comes armed through our watch so like the king That was and is the question of these wars.',
    author: 'Person1',
    article_id: 1,
    user_id: 1
  },
  {
    description: 'That can I At least, the whisper goes so. Our last king, Whose image even but now appeard to us, Was, as you know, by Fortinbras of Norway, Thereto prickd on by a most emulate pride, Dared to the combat in which our valiant Hamlet-- For so this side of our known world esteemd him-- Did slay this Fortinbras who by a seald compact,',
    author: 'Person2',
    article_id: 1,
    user_id: 2
  },
  {
    description: 'A mote it is to trouble the minds eye. In the most high and palmy state of Rome, A little ere the mightiest Julius fell, The graves stood tenantless and the sheeted dead Did squeak and gibber in the Roman streets: As stars with trains of fire and dews of blood,',
    author: 'Person1',
    article_id: 2,
    user_id: 1
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
