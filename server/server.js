const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));

// Controllers
const booksController = require('./controllers/book_controller');
app.use('/api/books', booksController);

// Catch all route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// LISTEN
const PORT = process.env.PORT || 4005; // Use the PORT environment variable
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
