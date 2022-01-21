import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MyPage from './pages/MyPage';
import Login from './pages/Login.js';
import Join from './pages/Join';
import Nav from './components/Nav';
import Chat from './pages/Chat';
import Oauth from './pages/Oauth';
import Home from './pages/Home';

export const Routers = ({
  isLogin,
  setIsLogin,
  handleResponseSuccess,
  userInfo,
  handleLogout,
  accessToken,
  setAccessToken
}) => {
 
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login 
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleResponseSuccess={handleResponseSuccess}
          accessToken={accessToken}
          setAccessToken={setAccessToken}
        />} />
        <Route path="/mypage" element={<MyPage
          isLogin={isLogin}
          userInfo={userInfo}
          handleLogout={handleLogout}
          accessToken={accessToken}
          setAccessToken={setAccessToken}
        />} />
        <Route path="/chat" element={<Chat />} />
        {/* <Route path="/oauth" element={<Oauth />} /> */}
      </Routes>
      <Nav
      isLogin={isLogin}
      />
    </>
  );
};
