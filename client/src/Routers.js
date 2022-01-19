import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MyPage from './pages/MyPage';
import Login from './pages/Login.js';
import Join from './pages/Join';
import Home from './pages/Home';
import Nav from './components/Nav';

export const Routers = ({
  isLogin,
  handleResponseSuccess,
  userInfo,
  handleLogout
}) => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login 
          isLogin={isLogin}
          handleResponseSuccess={handleResponseSuccess}
        />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  );
};
