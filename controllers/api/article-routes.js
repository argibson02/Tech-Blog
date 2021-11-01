const router = require('express').Router();
const { Article, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth.js');

// GET one article
router.get('/:id', withAuth, async (req, res) => {
    console.log(">>> ARTICLE GET 01 <<<");
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

// NEW!!!
router.post('/', withAuth, async (req, res) => {
    console.log(">>> ARTICLE POST NEW <<<");
    try {
        const newArticle = await Article.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newArticle);
    } catch (err) {
        res.status(400).json(err);
    }
});

// EDIT!!!
router.put('/:id', withAuth, async (req, res) => {
    console.log(">>> ARTICLE PUT UPDATE <<<");
    try {
        const dbArticleData = await Article.findByPk(
            {
            article_title: req.body.article_title,
            description: req.body.description
          },
          {
            where: {
              id: req.params.id,
              user_id: req.session.user_id,
            },
          });
        const article = dbArticleData.get({ plain: true });
        res.render('view-single-article', { article, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// DELETE << should be OK
router.delete('/:id', withAuth, async (req, res) => {
    console.log(">>> ARTICLE DELETE <<<");
    try {
      const dbArticleData = await Article.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!dbArticleData) {
        res.status(404).json({ message: 'No article found with this id!' });
        return;
      }
      res.status(200).json(dbArticleData);
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;

