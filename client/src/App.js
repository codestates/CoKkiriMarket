import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";

import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Routers } from './Routers';
import axios from 'axios';



function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const navigate = useNavigate();
  const isAuthenticated = () => {
    setIsLogin(true)
  };
  const handleResponseSuccess = (email) => {
    setUserInfo(email)
    isAuthenticated();
  };
  const handleLogout = () => {
    setUserInfo(null);
    setIsLogin(false);
    console.log('핸들로그아웃 작동')
    navigate('/login')
    const options = {
      method: 'post',
      url: 'https://dev.cokkiriserver.xyz/user/logout',
      user: userInfo
    }
    axios(options)
      .then((res) => {
        setUserInfo(null);
        setIsLogin(false);
        console.log('logout 성공')
        navigate('/')
      })
      .catch((err) => {
        console.log('logout 실패')
    });

  };

  useEffect(() => {
    // isAuthenticated();
  }, []);

  return (
    <>
    <AppContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
          <Routers
            isLogin={isLogin}        
            handleResponseSuccess={handleResponseSuccess}
            userInfo={userInfo} 
            handleLogout={handleLogout}
          >
          </Routers>
        </ThemeProvider>
      </AppContainer>
    </>
  );
}

export default App;

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  text-decoration-line: none;
  background-color: #f9f9f9;
`;