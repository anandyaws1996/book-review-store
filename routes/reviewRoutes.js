const express = require('express');
const router = express.Router();
const { getBookReviews, addReview, deleteReview } = require('../controllers/reviewController');
const auth = require('../middleware/auth');

router.get('/:isbn', getBookReviews);
router.post('/', auth, addReview);
router.delete('/:reviewId', auth, deleteReview);

module.exports = router;