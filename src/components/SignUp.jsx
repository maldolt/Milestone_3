
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import './styles/styles.scss';


//supabase
const supabaseUrl = Url_Supabase.env
const supabaseKey = Enon_key_Supabase.env ;

const supabase = createClient(supabaseUrl, supabaseKey);

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSignUp = async () => {
    if (email === '' || password === '') {
      window.alert('Email and Password fields cannot be empty.');
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        window.alert('Error signing up: ' + error.message);
      } else {
        window.alert('Signup successful. Check your email for the verification link.');
      }
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
    navigate(`/Dashboard`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit button clicked');
    handleSignUp();
  };

  const fetchUserData = async (userId) => {
    try {
      const { data, error } = await supabase.from('users').select('*').eq('id', userId);
      if (error) {
        console.error('Error fetching user data:', error.message);
        return null;
      }
      return data;
    } catch (error) {
      console.error('Error fetching user data:', error.message);
      return null;
    }
  };

  useEffect(() => {
    const userId = '123'; // Replace with the actual user ID
    fetchUserData(userId).then((userData) => {
      if (userData) {
        console.log('User data:', userData);
        // Handle user data
      } else {
        console.log('Failed to fetch user data.');
        // Handle error
      }
    });
  }, []);

  return (
    <div className="h-container">
      <h1>Sign Up</h1>
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
        <br />
        <div>
          <button className="button signup-button">Sign Up</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
      <footer className="footer">
        <p>&copy; 2023 Reading Log App | <a href={'https://github.com/maldolt/milestone_3.git'} target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
      </footer>
    </div>
  );
}

export default SignUp;
