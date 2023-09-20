const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const loginController = require('./controllers/loginController');
const signupController = require('./controllers/signupController');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/routes'); 
const { createClient } = require('@supabase/supabase-js');
const { default: DashboardPage } = require('../src/components/Dashboard');

const supabaseUrl = 'https://qtzwzoszjisovyydpjww.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0end6b3N6amlzb3Z5eWRwand3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyODc5NTksImV4cCI6MjAwOTg2Mzk1OX0.jVDzrA0WmZnpnK3x7T0Jno4siKt_vwcZrC2rwV01il8';
const supabase = createClient(supabaseUrl, supabaseKey);

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

//sequelize
// Sync the model with the database
sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => {
  console.error('Error syncing database:', err);
});

// Use the custom middleware function
app.use(myMiddleware);

// Controllers
app.use('/api/login', loginController);
app.use('/api/signup', signupController);
app.use('/api/dashboard', )

// Use the authRoutes for '/signup'
app.use('/signup', authRoutes);

// Use the userRoutes for '/users'
app.use('/users', userRoutes);

// Catch all route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

//creating a post 

// LISTEN
const PORT = process.env.PORT || 4005; // Set the PORT using environment variable or default to 4005
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
