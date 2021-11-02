const router = require('express').Router();
const { Article, User, Comment } = require('../models');
const withAuth = require('../utils/auth.js');
const local = require('./api/user-routes')

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
   console.log("Homepage",req.session)
    res.render('homepage', {
      articles,
      loggedIn: req.session.loggedIn,
      username:req.session.username,
      userid:req.session.userid,
      email:req.session.email
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET for Dashboard
router.get('/dashboard', async (req, res) => {
  console.log(local.localUser);
  
  try {
    const dbArticleData = await Article.findAll({where: { user_id: local.localUser }});
    // console.log(local.localUser);
    const articles = dbArticleData.map((article) => // change to articles
      article.get({ plain: true })
    );
    // console.log(res);
    res.render('view-all-article', {
      articles,
      loggedIn: req.session.loggedIn,
      username:req.session.username,
      userid:req.session.userid,
      email:req.session.email
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
      username:req.session.username,
      userid:req.session.userid,
      email:req.session.email
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
