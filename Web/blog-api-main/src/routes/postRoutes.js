const express = require('express');
const router = express.Router();
const {
  post_index,
  post_details,
  post_create,
  post_delete,
  post_update,
} = require('../controllers/postController');
const { verifyToken } = require('../controllers/authController');

router.get('/', post_index);
router.post('/', verifyToken, post_create);
router.get('/:id', post_details);
router.put('/:id', verifyToken, post_update);
router.delete('/:id', verifyToken, post_delete);

module.exports = router;
