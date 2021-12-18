import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/Homepage.component.js';
import ShopPage from './components/shop/ShopPage.component';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>

    </div>
  );
}

export default App;
