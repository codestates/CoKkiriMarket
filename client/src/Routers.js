import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MyPage from './pages/MyPage';
import Login from './pages/Login.js';
import Join from './pages/Join';
import Nav from './components/Nav';
import List from './pages/List';
import Post from './pages/Post';
import Add from './pages/Add';
import Chat from './pages/Chat';
import Oauth from './pages/Oauth';

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
        <Route path='/' element={<List />}></Route>
        <Route path='/list/:id' element={<Post />}></Route>
        <Route path='/add' element={<Add />}></Route>
        <Route path='/join' element={<Join />} />
        <Route
          path='/login'
          element={
            <Login
              isLogin={isLogin}
              handleResponseSuccess={handleResponseSuccess}
            />
          }
        />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/join' element={<Join />} />
        <Route
          path='/login'
          element={
            <Login
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              handleResponseSuccess={handleResponseSuccess}
              accessToken={accessToken}
              setAccessToken={setAccessToken}
            />
          }
        />
        <Route
          path='/mypage'
          element={
            <MyPage
              isLogin={isLogin}
              userInfo={userInfo}
              handleLogout={handleLogout}
              accessToken={accessToken}
              setAccessToken={setAccessToken}
            />
          }
        />
        <Route path='/chat' element={<Chat />} />
        {/* <Route path="/oauth" element={<Oauth />} /> */}
      </Routes>
      <Nav isLogin={isLogin} />
    </>
  );
};
