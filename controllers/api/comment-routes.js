const router = require('express').Router();
const { Comment, User, Article } = require('../../models');
const withAuth = require('../../utils/auth.js');


router.get('/', async (req, res) => {
    console.log(">>> COMMENT GET <<<");
    try {
        const newComment = await Comment.findAll({
            include: [{ model: User }, { model: Article }]
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});


// NEW!!!
router.post('/', async (req, res) => {
    console.log(">>> COMMENT POST NEW <<<");
    console.log(req.body);
    try {
        const newComment = await Comment.create({
            ...req.body,
            include: { model: Article }, //remove???
            include: { model: User, where: {id: req.session.user_id}}, //remove???
        });
        console.log(newComment);
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});


// DELETE << should be OK
router.delete('/:id', async (req, res) => {
    console.log(">>> COMMENT DELETE <<<");
    // console.log(req.session);
    try {
      const dbCommentData = await Comment.destroy({
        where: {
          id: req.params.id,
        //   user_id: req.session.user_id, //remove???
        },
      });
  
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.status(200).json(dbCommentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;