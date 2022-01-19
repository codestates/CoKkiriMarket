
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
  height: 500px;
  border-radius:10px;
`;

export const NavTitle = styled.div`
  font-size: 100px;
`;

const Footer = ({ isLogin}) => {
  return (
    <div>
      '풋터입니다'
      <>
      asdfsafdasfs
      <NavTitle>네브바</NavTitle>
        <NavContainer>
          <Link to="/ " style={{ textDecoration: 'none' }}><NavList /></Link>
          <Link to="/search" style={{ textDecoration: 'none' }}><NavSearch /></Link>
          {isLogin ? null : <Link to="/login" style={{ textDecoration: 'none' }}><NavLogin /></Link>}
          {isLogin ? <Link to="/chat" style={{ textDecoration: 'none' }}><NavChat /></Link> : null}
          {isLogin ? <Link to="/mypage" style={{ textDecoration: 'none' }}><NavMyPage /></Link> : null}
        </NavContainer>
      </>
    </div>
  );
};

export default Footer;