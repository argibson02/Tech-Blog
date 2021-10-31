const router = require('express').Router();
const { Article, User } = require('../models');
const withAuth = require('../utils/auth.js');

// GET all articles for homepage
router.get('/', async (req, res) => {
  try {
    const dbArticleData = await Article.findAll({
      include: [
        {
          model: User,
          attributes: ['id', 'username'],
        },
      ],
    });

    const articles = dbArticleData.map((article) => // change to articles
      article.get({ plain: true })
    );

    res.render('homepage', {
      articles,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one article
router.get('/article/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  withAuth(req, res);

  // If the user is logged in, allow them to view the article
  try {
    const dbArticleData = await Article.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: [
            'id',
            'description',
            'author',
            'timestamp',
          ],
        },
        {
          model: User,
          attributes: ['id', 'username'],
        },
      ],
    });
    const article = dbArticleData.get({ plain: true });
    res.render('view-single-article', { article, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// GET one comment  DELETE AFTER TESTING
// router.get('/article/test/:id', withAuth, async (req, res) => {
//   try {
//     const dbArticleData = await Article.findByPk(req.params.id, {
//       include: [
//         {
//           model: Comment,
//           attributes: [
//             'id',
//             'description',
//             'author',
//             'timestamp',
//           ],
//         },
//         {
//           model: User,
//           attributes: ['id', 'username'],
//         },
//       ],
//     });
//     const articleData = dbArticleData.get({ plain: true });    
//     res.status(200).json(articleData);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });


// GET one comment  DELETE AFTER TESTING
// router.get('/comment/test/:id', withAuth, async (req, res) => {
//   try {
//     const dbCommentData = await Comment.findByPk(req.params.id);

//     const commentData = dbCommentData.get({ plain: true });

//     res.status(200).json(commentData);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET one USER  DELETE AFTER TESTING
// router.get('/user/test/:id', withAuth, async (req, res) => {
//   try {
//     const dbUserData = await User.findByPk(req.params.id);

//     const userData = dbUserData.get({ plain: true });

//     res.status(200).json(userData);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });



router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
