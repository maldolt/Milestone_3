import React, { useState } from 'react';
import { supabase } from './utilities/supabaseClient';

import './styles/styles.scss';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) {
        console.error('Login failed:', error.message);
      } else {
        console.log('Login successful:', user);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <div className="h-container">
      <h2>Login</h2>
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
          <button className="button login-button" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;