const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = await User.create({
      email,
      password, // hash the password 
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
