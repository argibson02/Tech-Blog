const router = require('express').Router();
const { Article, Comment } = require('../../models');

// GET one article
router.get('/:id', async (req, res) => {

    try {
        const dbArticleData = await Article.findByPk(req.params.id, {
            include: [
                { model: Comment, required: false, where: { article_id: req.params.id } },
            ],
        });
        const article = dbArticleData.get({ plain: true });

        res.render('view-single-article', { article, loggedIn: req.session.loggedIn, username: req.session.username, userid: req.session.userid, email: req.session.email });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one article for edit
router.get('/edit/:id', async (req, res) => {
    try {
        const dbArticleData = await Article.findByPk(req.params.id, {
            include: [
                { model: Comment, required: false, where: { article_id: req.params.id } },
            ],
        });
        const article = dbArticleData.get({ plain: true });

        res.render('edit-article', { article, loggedIn: req.session.loggedIn, username: req.session.username, userid: req.session.userid, email: req.session.email });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// NEW!!!
router.post('/', async (req, res) => {
    try {
        const newArticle = await Article.create({
            ...req.body,
        });
        res.status(200).json(newArticle);
        document.location.replace(`/`);
    } catch (err) {
        res.status(400).json(err);
    }
});

// EDIT!!!
router.put('/:id', async (req, res) => {
    try {
        const updateArticle = await Article.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!updateArticle[0]) {
            res.status(404).json({ message: 'No article with this id!' });
            return;
        }
        res.status(200).json(updateArticle);
        return;
    } catch (err) {
        res.status(400).json(err);
    }
});


// DELETE << should be OK
router.delete('/:id', async (req, res) => {
    try {
        const dbArticleData = await Article.destroy({
            where: {
                id: req.params.id,
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