import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://<project>.supabase.co", "<your-anon-key>");

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
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
