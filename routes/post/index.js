const express = require('express');
const router = express.Router();

const postService = require('./post.service');

router.get('/', postService.getAllPosts );

module.exports = router;