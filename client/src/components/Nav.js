import React from 'react';
import styled from "styled-components";
import NavList from './NavList';
import NavSearch from './NavSearch';
import NavLogin from './NavLogin';
import NavMyPage from './NavMyPage';
import NavChat from './NavChat';
import { Link } from "react-router-dom"; 


export const NavContainer = styled.div`
  text-decoration-line: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  background-color: #fffefe;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  border-radius:10px;
  border: 1px solid black;
`;

export const NavTitle = styled.div`
  font-size: 100px;
`;



const Nav = ({ isLogin }) => {
    return (
      <>
        <NavContainer>
          <Link to="/ " style={{ textDecoration: 'none' }}><NavList /></Link>
          <Link to="/search" style={{ textDecoration: 'none' }}><NavSearch /></Link>
          {isLogin ? null : <Link to="/login" style={{ textDecoration: 'none' }}><NavLogin /></Link>}
          {isLogin ? <Link to="/chat" style={{ textDecoration: 'none' }}><NavChat /></Link> : null}
          {isLogin ? <Link to="/mypage" style={{ textDecoration: 'none' }}><NavMyPage /></Link> : null}
        </NavContainer>
      </>
  );
};

export default Nav;