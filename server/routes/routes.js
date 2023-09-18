const { User } = require('../models');

async function signUp(req, res) {
  try {
    const { username, email, password } = req.body;
    // Validate and create a new user
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  signUp,
};
