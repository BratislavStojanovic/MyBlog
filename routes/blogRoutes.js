const express = require('express');
const BlogController = require('../controllers/BlogController');
const router = express.Router();

// blog routes
router.get('/', BlogController.blog_index);

router.post('/', BlogController.blog_create_post);
// blogs create page
router.get('/create', BlogController.blog_create_get);

router.get('/:id', BlogController.blog_details);

router.delete('/:id', BlogController.blog_delete);

module.exports = router;
