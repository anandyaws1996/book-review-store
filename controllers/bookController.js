const Book = require('../models/Book');
const axios = require('axios');

// Task 10: Get all books - Using async callback function
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Task 11: Search by ISBN - Using Promises
const getBookByISBN = (req, res) => {
  Book.findOne({ isbn: req.params.isbn })
    .then(book => {
      if (!book) return res.status(404).json({ error: 'Book not found' });
      res.json(book);
    })
    .catch(error => res.status(500).json({ error: error.message }));
};

// Task 12: Search by Author - Using async/await
const getBooksByAuthor = async (req, res) => {
  try {
    const books = await Book.find({ author: new RegExp(req.params.author, 'i') });
    if (books.length === 0) return res.status(404).json({ error: 'No books found by this author' });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Task 13: Search by Title - Using async/await
const getBooksByTitle = async (req, res) => {
  try {
    const books = await Book.find({ title: new RegExp(req.params.title, 'i') });
    if (books.length === 0) return res.status(404).json({ error: 'No books found with this title' });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllBooks, getBookByISBN, getBooksByAuthor, getBooksByTitle };