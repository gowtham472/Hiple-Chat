
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App1 from './App1';
import './App.css';


const App = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    
    if (password === 'admin@123') {
      setIsAuthenticated(true);
    } else {
     
      console.log('Incorrect password. Please try again.');
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/main" />
            ) : (
              <div class="pass">
                <h2 class="wel">Hiple  Welcomes  you</h2>
                <form onSubmit={handlePasswordSubmit}className='form1'>
                  <label class="lab">
                    Password
                    <input
                     className='pass7'
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </label>
                  <button type="submit" class="sub">Enter App</button>
                </form>
              </div>
            )
          }
        />
        <Route path="/main" element={<App1 />} />
      </Routes>
    </Router>
  );
};

export default App;
