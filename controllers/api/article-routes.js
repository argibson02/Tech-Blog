const router = require('express').Router();
const { Article, User, Comment } = require('../../models');

// GET one article
router.get('/:id', async (req, res) => {
    console.log(">>> ARTICLE GET 01 <<<");
    // console.log(req.params);
    try {
        const dbArticleData = await Article.findByPk(req.params.id, {
            include: [
                { model: Comment, required: false, where: { article_id: req.params.id } },
            ],
        });
        const article = dbArticleData.get({ plain: true });

        res.render('view-single-article', { article, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one article for edit
router.get('/edit/:id', async (req, res) => {
    console.log(">>> ARTICLE GET 01 <<<");
    // console.log(req.params);
    try {
        const dbArticleData = await Article.findByPk(req.params.id, {
            include: [
                { model: Comment, required: false, where: { article_id: req.params.id } },
            ],
        });
        const article = dbArticleData.get({ plain: true });

        res.render('edit-article', { article, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// NEW!!!
router.post('/', async (req, res) => {
    console.log(">>> ARTICLE POST NEW <<<");
    // console.log(req.session.id);
    try {
        const newArticle = await Article.create({
            ...req.body,
            // user_id: req.session.id,
        });
        console.log("VVVVVVVVVVVVVVVVVVVV");
        console.log(req.body);
        res.status(200).json(newArticle);
        document.location.replace(`/`);
        // document.location.replace(`/article/${newArticle.dataValues.id}`);
    } catch (err) {
        res.status(400).json(err);
    }
});

// EDIT!!!
router.put('/:id', async (req, res) => {
    console.log(">>> ARTICLE POST NEW <<<");
    // console.log(req.params);
    // console.log(req.body);
    try {
        const updateArticle = await Article.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        // console.log(updateArticle);
        if (!updateArticle[0]) { // double check here
            res.status(404).json({ message: 'No article with this id!' });
            return;
        }
        res.status(200).json(updateArticle);
        document.location.replace(`/article/${req.params.id}`);
        // res.render('view-single-article', { article, loggedIn: req.session.loggedIn });
        // res.status(200).redirect(`/api/article/${req.params.id}`);
        return;
    } catch (err) {
        res.status(400).json(err);
    }
});


// DELETE << should be OK
router.delete('/:id', async (req, res) => {
    console.log(">>> ARTICLE DELETE <<<");
    try {
        const dbArticleData = await Article.destroy({
            where: {
                id: req.params.id,
                // user_id: req.session.user_id,
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

