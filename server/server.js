const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const loginController = require('./controllers/loginController');
const signupController = require('./controllers/signupController');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/routes'); 

// Create the Express app
const app = express();

// Custom middleware function
const myMiddleware = (req, res, next) => {
  // Log the request details
  console.log(`Received ${req.method} request at ${req.url}`);

  // Check if the user is authenticated
  if (req.isAuthenticated()) {
    // Modify the request object
    req.customData = { userId: 123 };

    // Move to the next middleware or route handler
    next();
  } else {
    // User is not authenticated
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());

// Use the custom middleware function
app.use(myMiddleware);

// Controllers
app.use('/api/login', loginController);
app.use('/api/signup', signupController);

// Use the authRoutes for '/signup'
app.use('/signup', authRoutes);

// Use the userRoutes for '/users'
app.use('/users', userRoutes);

// Catch all route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// LISTEN
const PORT = process.env.PORT || 4005; // Set the PORT using environment variable or default to 4005
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
