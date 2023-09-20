import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import DashboardPage  from './components/Dashboard';

const supabase = createClient("https://qtzwzoszjisovyydpjww.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0end6b3N6amlzb3Z5eWRwand3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyODc5NTksImV4cCI6MjAwOTg2Mzk1OX0.jVDzrA0WmZnpnK3x7T0Jno4siKt_vwcZrC2rwV01il8");

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister(e) {
    e.preventDefault();
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.error('Error signing up:', error.message);
    } else {
      console.log('User signed up successfully:', user);
    }
  }

  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={
              <SignUp
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                handleRegister={handleRegister}
              />
            } />
            <Route path="/login" element={<LogIn />} />
            <Route path="/dashboard" element={<DashboardPage  />} />

          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
