import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import AlphaDSASheet from './components/DSASheet/AlphaDSASheet';

function App() {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* If the user is logged in, redirect to AlphaDSASheet, otherwise show Login */}
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dsa-sheet" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        />
        {/* AlphaDSASheet route */}
        <Route path="/dsa-sheet" element={isLoggedIn ? <AlphaDSASheet setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
