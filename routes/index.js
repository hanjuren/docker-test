const express = require('express');
const postRouter = require('./post');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello Docker And Express');
});

router.use('/post', postRouter);

module.exports = router;