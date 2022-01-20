import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MyPage from './pages/MyPage';
import Login from './pages/Login.js';
import Join from './pages/Join';
import Nav from './components/Nav';
import Chat from './pages/Chat';

export const Routers = ({
  isLogin,
  handleResponseSuccess,
  userInfo,
  handleLogout
}) => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login 
          isLogin={isLogin}
          handleResponseSuccess={handleResponseSuccess}
        />} />
        <Route path="/mypage" element={<MyPage
          userInfo={userInfo}
          handleLogout={handleLogout}
        />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Nav
      isLogin={isLogin}
      />
    </>
  );
};
