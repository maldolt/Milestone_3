const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const loginController = require('./controllers/loginController');
const signupController = require('./controllers/signupController');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/routes');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://qtzwzoszjisovyydpjww.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0end6b3N6amlzb3Z5eWRwand3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyODc5NTksImV4cCI6MjAwOTg2Mzk1OX0.jVDzrA0WmZnpnK3x7T0Jno4siKt_vwcZrC2rwV01il8';
const supabase = createClient(supabaseUrl, supabaseKey);

// Create the Express app

const app = express();

const myMiddleware = (req, res, next) => {
  console.log(`Received ${req.method} request at ${req.url}`);
  if (req.isAuthenticated()) {
    req.customData = { userId: 123 };
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());
app.use(myMiddleware);
app.use('/api/login', loginController);
app.use('/api/signup', signupController);
app.use('/api/dashboard', userRoutes);
app.use('/signup', authRoutes);

// New endpoint to handle form submissions
app.post('/api/submitForm', (req, res) => {
  const { title, rating, date } = req.body;
  console.log('Received form submission:', { title, rating, date });
  // Insert data into your Supabase table or your database
  // You can use the supabase client or any other ORM to handle this
  // Respond with a success message or any necessary response
  res.json({ message: 'Form submitted successfully!' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

const PORT = process.env.PORT || 4005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
