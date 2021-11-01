const router = require('express').Router();
const { Comment, User, Article } = require('../../models');
const withAuth = require('../../utils/auth.js');


// NEW!!!
router.post('/', async (req, res) => {
    console.log(">>> COMMENT POST NEW <<<");
    console.log(req.body);
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
            include: { model: User, where: {id: req.session.user_id}},
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
    try {
      const dbCommentData = await Comment.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
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