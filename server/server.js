const express = require('express');
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const booksController = require('./controllers/book_controller');
const loginControler = require('./controllers/loginControler');
const signupController = require('./controllers/signupController');
const authRoutes = require('./routes/authRoutes');

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());

// Controllers
app.use('/api/books', booksController);
app.use('/api/login', loginControler);
app.use('/api/signup', signupController);

// Use the authRoutes for '/signup'
app.use('/signup', authRoutes);

// Catch all route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// LISTEN
const PORT = process.env.PORT || 4005; // Set the PORT using environment variable or default to 4005
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
