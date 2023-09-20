import React, { useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import { Link, useNavigate } from 'react-router-dom';
//import Dashboard from './Dashboard';

import './styles/styles.scss';

const supabaseUrl = "https://qtzwzoszjisovyydpjww.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0end6b3N6amlzb3Z5eWRwand3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyODc5NTksImV4cCI6MjAwOTg2Mzk1OX0.jVDzrA0WmZnpnK3x7T0Jno4siKt_vwcZrC2rwV01il8"
; 
const supabase = createClient(supabaseUrl, supabaseKey);


  const Login = () => {
    const [state, setState] = useState({ email: "", password: "" });
    const navigate = useNavigate();
  
    const handleLogin = async () => {
      try {
        const { email, password } = state;
        if (!email || !password) {
          return;
        }
  
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });
        if (error) {
          console.error("Login failed:", error.message);
          alert("Login failed! Please check your credentials and try again.");
          return;
        }
  
        alert("Login successful!");
        const userUuid = data.user.id;
        
        navigate("/resources"); // Navigate to the dashboard page

       
        localStorage.setItem("userUuid", userUuid);
      
        console.log(userUuid);
     
      } catch (error) {
        console.error("Login error:", error);
      }
    };
  
  return (
    <div className="h-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.email}
            onChange={e => setState({ ...state, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.password}
              onChange={e => setState({ ...state, password: e.target.value })}
            required
          />
        </div>
        <div>
          <button className="button login-button" type="submit" onClick={handleLogin}>Login</button>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
        
      </form>
      <footer className="footer">
        <p>&copy; 2023 Reading Log App | <a href={'https://github.com/maldolt/milestone_3.git'} target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
      </footer>
    </div>
  );
};

export default Login;