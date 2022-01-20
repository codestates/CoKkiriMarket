import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Routers } from './Routers';
import axios from 'axios';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  // const history = useHistory();
  const isAuthenticated = () => {
    setIsLogin(true);
  };
  const handleResponseSuccess = (email) => {
    setUserInfo(email);
    isAuthenticated();
  };
  const handleLogout = () => {
    const options = {
      method: 'post',
      url: 'https://api.cokkirimarket.xyz/user/logout',
      user: userInfo
    };
    const newUser = axios(options)
      .then((res) => {
        setUserInfo(null);
        setIsLogin(false);
        console.log('logout 성공');
        // history.push("/");
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
          handleResponseSuccess={handleResponseSuccess}
          userInfo={userInfo}
          handleLogout={handleLogout}
        ></Routers>
      </ThemeProvider>
    </>
  );
}

export default App;
