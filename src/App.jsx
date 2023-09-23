import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Resources from './components/Resources';
import DashboardPage from './components/Dashboard';
import About from './components/About'
import NewBook from './components/NewBook'
import PasswordReset from './components/PasswordReset';

const App = () => {
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/newbook" element={<NewBook />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
