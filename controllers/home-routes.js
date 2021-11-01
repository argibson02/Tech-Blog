const router = require('express').Router();
const { Article, User, Comment } = require('../models');
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

router.get('/dashboard', async (req, res) => {
  try {
    const dbArticleData = await Article.findAll({
      include: [
        {
          model: User,
          attributes: ['id', 'username'],
        },
      ],
    },
      {
        where: {
          user_id: req.session.id
        }
      }
    );
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


// GET for new article page
router.get('/new', async (req, res) => {
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

    res.render('add-article', {
      articles,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
