const express = require('express');
const postRouter = require('./post');
const { User, Post } = require('../models')

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: {
        model: User,
        as: 'user',
      },
    });
    const total = await Post.count({ col: 'id' });

    console.log(total);
    console.log(posts);
    res.render('index', {
      title: 'Docker And Express',
      total,
      posts,
    });
  } catch (err) {
    console.log(err);
  }
});

router.use('/post', postRouter);

module.exports = router;