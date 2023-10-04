import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import "./styles/styles.scss";
import { useNavigate } from 'react-router-dom';

//supabase
const supabaseUrl = Url_Supabase.env
const supabaseKey = Enon_key_Supabase.env ;

const supabase = createClient(supabaseUrl, supabaseKey);

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate(); 

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    // Ensure email and new password are provided
    if (!email || !newPassword) {
      alert('Please enter your email and new password.');
      return;
    }

    try {
      const { error } = await supabase.auth.api.resetPasswordForEmail(email);
      if (error) {
        console.error('Password reset request failed:', error.message);
        alert('Password reset request failed! Please try again.');
    } else {
        alert('Password reset email sent! Check your email for further instructions.');
        navigate('/login'); // Redirect to login page on successful password reset
      }
    } catch (error) {
      console.error('Password reset error:', error);
    }
  };

  return (
    <div className="h-container">
      <h1>Password Reset</h1>
      <form onSubmit={handlePasswordReset}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <br />
          <button className="button reset-password-button" type="submit">
            Reset Password
          </button>
        </div>
      </form>
      <footer className="footer">
        <p>
          &copy; 2023 Reading Log App |{' '}
          <a
            href={'https://github.com/maldolt/milestone_3.git'}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </p>
      </footer>
    </div>
  );
};

export default PasswordReset;
