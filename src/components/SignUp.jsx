import React, { useState } from 'react';
import './styles/styles.scss';


function SignUp() {
  // Create state variables to store user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit button clicked');

    // Create a user object with email and password
    const user = {
      email,
      password,
    };

    try {
      // Send a POST request to your server with the user data
      const response = await fetch('http://localhost:5000/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // If the request is successful, you can redirect the user or perform other actions
        console.log('User registered successfully');
        // Reset the form fields
        setEmail('');
        setPassword('');
      } else {
        // Handle errors here
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="h-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button className="button signup-button" >Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
