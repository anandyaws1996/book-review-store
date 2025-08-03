const Review = require('../models/Review');
const Book = require('../models/Book');

// Task 5: Get book reviews
const getBookReviews = async (req, res) => {
  try {
    const book = await Book.findOne({ isbn: req.params.isbn });
    if (!book) return res.status(404).json({ error: 'Book not found' });

    const reviews = await Review.find({ bookId: book._id }).populate('userId', 'username');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Task 8: Add/Modify a book review
const addReview = async (req, res) => {
  try {
    const { isbn, rating, comment } = req.body;
    const book = await Book.findOne({ isbn });
    if (!book) return res.status(404).json({ error: 'Book not found' });

    let review = await Review.findOne({ bookId: book._id, userId: req.user.userId });
    if (review) {
      // Modify existing review
      review.rating = rating;
      review.comment = comment;
      review.createdAt = Date.now();
    } else {
      // Add new review
      review = new Review({
        bookId: book._id,
        userId: req.user.userId,
        rating,
        comment,
      });
    }
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Task 9: Delete book review
const deleteReview = async (req, res) => {
  try {
    const review = await Review.findOneAndDelete({
      _id: req.params.reviewId,
      userId: req.user.userId,
    });
    if (!review) return res.status(404).json({ error: 'Review not found or not authorized' });
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getBookReviews, addReview, deleteReview };