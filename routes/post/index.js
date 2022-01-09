const express = require('express');
const router = express.Router();

const postService = require('./post.service');

router.get('/', postService.getAllPosts );
router.post('/', postService.createPost );

module.exports = router;