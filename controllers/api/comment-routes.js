const router = require('express').Router();
const { Comment, User, Article } = require('../../models');

router.get('/', async (req, res) => {
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
  try {
    const newComment = await Comment.create({
      ...req.body,
      include: { model: Article },
      include: { model: User, where: { id: req.session.userid } },
    });
    console.log(newComment);
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});


// DELETE << should be OK
router.delete('/:id', async (req, res) => {
  try {
    const dbCommentData = await Comment.destroy({
      where: {
        id: req.params.id,
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