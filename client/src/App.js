import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Routers } from './Routers';
import axios from 'axios';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const navigate = useNavigate();
  const isAuthenticated = () => {
    setIsLogin(true);
  };
  const handleResponseSuccess = (email) => {
    setUserInfo(email);
    isAuthenticated();
  };
  const handleLogout = () => {
    setUserInfo(null);
    setIsLogin(false);
    navigate('/login');

    axios
      .get('https://api.cokkirimarket.xyz/user/logout', {
        headers: {
          Authorization: 'Bearer ' + accessToken
        }
      })
      .then((res) => {
        setUserInfo(null);
        setIsLogin(false);
        setAccessToken('');
        navigate('/login');
      })
      .catch((err) => {
        console.log('logout 실패');
      });
  };

  useEffect(() => {
    // isAuthenticated();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routers
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleResponseSuccess={handleResponseSuccess}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          handleLogout={handleLogout}
          accessToken={accessToken}
          setAccessToken={setAccessToken}
        ></Routers>
      </ThemeProvider>
    </>
  );
}

export default App;
