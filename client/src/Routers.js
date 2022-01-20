import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MyPage from './pages/MyPage';
import Login from './pages/Login.js';
import Join from './pages/Join';
import Nav from './components/Nav';
import List from './pages/List';
import Post from './pages/Post';
import Add from './pages/Add';

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
      </Routes>
      <Nav />
    </BrowserRouter>
  );
};
