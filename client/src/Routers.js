import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

export const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      </Routes>
    </BrowserRouter>
  );
};
