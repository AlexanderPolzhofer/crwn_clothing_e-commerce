import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/Homepage.component.js';
import ShopPage from './components/shop/ShopPage.component';
import Header from './components/header/Header.component';
import SignInAndSignUp from './components/sign-in-and-sign-up-page/SignInAndSignUpPage.component';

function App() {
  return (
    <div className='body'>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/sign" element={<SignInAndSignUp />}/>
      </Routes>

    </div>
  );
}

export default App;
