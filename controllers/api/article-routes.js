const router = require('express').Router();
const { Article, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth.js');

// GET one article
router.get('/:id', async (req, res) => {
    console.log(">>> ARTICLE GET 01 <<<");
    // console.log(req.params);
    try {
        const dbArticleData = await Article.findByPk(req.params.id, {
            include: [
                { model: Comment, where: { article_id: req.params.id } },
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
router.post('/', async (req, res) => {
    console.log(">>> ARTICLE POST NEW <<<");
    console.log(req.session.id);
    try {
        const newArticle = await Article.create({
            ...req.body,
            user_id: req.session.id,

        });

        res.status(200).json(newArticle);
    } catch (err) {
        res.status(400).json(err);
    }
});

// EDIT!!!
router.put('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
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

