import React, { useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import { Link, useNavigate } from 'react-router-dom';


import './styles/styles.scss';

//supabase
const supabaseUrl = Url_Supabase.env
const supabaseKey = Enon_key_Supabase.env ;

const supabase = createClient(supabaseUrl, supabaseKey);


  const Login = () => {
    const [state, setState] = useState({ email: "", password: "" });
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
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
        
        navigate(`/dashboard`); // Navigate to the dashboard page

       
        localStorage.setItem("userUuid", userUuid);
      
        console.log(userUuid);
     
      } catch (error) {
        console.error("Login error:", error);
      }
    };
  // password forgot
  const handleForgotPassword = () => {
    navigate(`/password-reset`);

  }
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
        <br />
          <button className="button login-button" type="button" onClick={handleLogin}>Login</button>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
        <div>
        <button
          className="button forgot-password-button"
          type="button"
          onClick={handleForgotPassword}
        >
          Forgot Password
        </button>
      </div>
        
      </form>
      <footer className="footer">
        <p>&copy; 2023 Reading Log App | <a href={'https://github.com/maldolt/milestone_3.git'} target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
      </footer>
    </div>
  );
};

export default Login;
