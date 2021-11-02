const { Article } = require('../models');

const articleData = [
  {
    article_title: 'How now, Horatio! you tremble and look pale: Is not this something more than fantasy?',
    description: '\'Tis sweet and commendable in your nature, Hamlet, To give these mourning duties to your father: But, you must know, your father lost a father. That father lost, lost his, and the survivor bound In filial obligation for some term To do obsequious sorrow: but to persever In obstinate condolement is a course Of impious stubbornness. \'tis unmanly grief.',
    author: 'Person1',  // might be able to swap this out for username from USER
    user_id: 1
  },
  {
    article_title: 'When he the ambitious Norway combated, So frowned he once, when, in an angry parle, He smote the sledded Polacks on the ice. \'Tis strange.',
    description: 'Though yet of Hamlet our dear brother\'s death The memory be green, and that it us befitted To bear our hearts in grief and our whole kingdom To be contracted in one brow of woe, Yet so far hath discretion fought with nature That we with wisest sorrow think on him, Together with remembrance of ourselves. Therefore our sometime sister, now our queen, The imperial jointress to this warlike state, Have we, as \'twere with a defeated joy,-- With an auspicious and a dropping eye, With mirth in funeral and with dirge in marriage, In equal scale weighing delight and dole,-- Taken to wife: nor have we herein barred Your better wisdoms, which have freely gone With this affair along. For all, our thanks. Now follows, that you know, young Fortinbras, Holding a weak supposal of our worth, Or thinking by our late dear brother\'s death Our state to be disjoint and out of frame, Colleagued with the dream of his advantage, He hath not failed to pester us with message, Importing the surrender of those lands Lost by his father, with all bonds of law, To our most valiant brother. So much for him. Now for ourself and for this time of meeting: Thus much the business is: we have here writ To Norway, uncle of young Fortinbras,-- Who, impotent and bed-rid, scarcely hears Of this his nephew\'s purpose,--to suppress His further gait herein, in that the levies, The lists and full proportions, are all made Out of his subject: and we here dispatch You, good Cornelius, and you, Voltimand, For bearers of this greeting to old Norway, Giving to you no further personal power To business with the king, more than the scope Of these delated articles allow. Farewell, and let your haste commend your duty.',
    author: 'Person2',  // might be able to swap this out for username from USER
    user_id: 2
  },

];

const seedArticle = () => Article.bulkCreate(articleData);

module.exports = seedArticle;
