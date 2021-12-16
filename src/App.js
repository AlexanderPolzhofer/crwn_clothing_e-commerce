import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/Homepage.component.js';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/home" element={<Homepage />} />
      </Routes>

    </div>
  );
}

export default App;
