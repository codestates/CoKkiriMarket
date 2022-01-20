import styled from "styled-components";
import { Link } from "react-router-dom"; 
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ( { isLogin, handleResponseSuccess } ) => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const handleLogin = () => {
    if(loginInfo.id===''|| loginInfo.pw===''){
      return  setErrorMessage('아이디와 비밀번호를 입력하세요')
    }
    else{
      const options = {
        method: 'post',
        url: 'https://dev.cokkiriserver.xyz/user/login',
        data: loginInfo
    }
    // else{
    //   const options = {
    //     method: 'post',
    //     url: 'https://api.cokkirimarket.xyz/user/login',
    //     data: loginInfo
    // }
    const newUser = axios(options)

      .then((res) => {
        // console.log("res.data : " + res.data);
        // console.log("res.data.accessToken : " + res.data.accessToken);
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;
        handleResponseSuccess(loginInfo.email)
        navigate('/mypage');
      })
      .catch((err) => {
        console.log(err)
        setErrorMessage('로그인 중 에러가 발생하였습니다')

      });
    }
  };

  return (
    <LoginContainer onSubmit={(e) => e.preventDefault()}>
      <LoginTitle>LOGIN</LoginTitle>      
      <LoginInputContainer><LoginInput 
        type='email'
        onChange={handleInputValue('email')} 
        placeholder='이메일을 입력하세요'
        ></LoginInput></LoginInputContainer>
      <LoginInputContainer><LoginInput 
        type='password'
        onChange={handleInputValue('password')} 
        placeholder='비밀번호를 입력하세요'
        ></LoginInput></LoginInputContainer>
      <LoginBtn 
        type='submit' 
        onClick={handleLogin}  
        >로그인</LoginBtn>
        <ErrorMsg>{errorMessage}</ErrorMsg>
      <LoginLine />
      <Link to="/join" style={{ textDecoration: 'none' }}><JoinBtnMail >메일로 시작하기 </JoinBtnMail></Link>
      <JoinBtnGithub>깃허브로 시작하기</JoinBtnGithub>
      <JoinBtnGoogle> 구글로 시작하기</JoinBtnGoogle>
    </LoginContainer>
  );
};

export default Login;

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  width: 360px;
  height: 90%;
  border-radius: 30px;
  background-color: #f9f9f9;
  box-shadow: 0px 0px 20px #d5d5d5;
  padding: 2px; 
  position: fixed;
  bottom: 0;
`;

export const LoginTitle = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  color : #636363;
  font-family: Nanum Barun Gothic;
  font-size : 40px;
  font-weight: bold;
`;

export const LoginInputContainer = styled.div`
  width: 240px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid #eeeeee;;
  /* box-shadow: 0px 0px 10px #e8e7e7; */
  background-color: #f9f9f9;
  padding: 2px; 
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginInput = styled.input`
  width: 80%;
  height: 60%;
  border: none;
  background-color: #f9f9f9;
  text-align: left;
  color : #808080;
  font-family: Nanum Barun Gothic;
  font-size : 15px;
  outline: none;
  ::placeholder {color: #cdcdcd}
  ::placeholder {font-size : 12px}
`;


export const LoginBtn = styled.div`
  width: 240px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid #6793E6;;
  /* box-shadow: 0px 0px 10px #e8e7e7; */
  background-color: #6793E6;;
  padding: 2px; 
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color : #f9f9f9;
  font-family: Nanum Barun Gothic;
  font-size : 15px;
  font-weight: bold;
`;

export const LoginLine = styled.div`
  width: 240px;
  height: 2px;
  border-radius: 20px;
background-color: #cdcbcb;
  margin: 10px;
`;

export const JoinBtnMail = styled.div`
  width: 240px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid #ffb398;
  background-color: #ffb398;
  padding: 2px; 
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color : #f9f9f9;
  font-family: Nanum Barun Gothic;
  font-size : 15px;
  font-weight: bold;
`;

export const JoinBtnGithub = styled.div`
  width: 240px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid #656565;
  background-color: #656565;
  padding: 2px; 
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color : #f9f9f9;
  font-family: Nanum Barun Gothic;
  font-size : 15px;
  font-weight: bold;
`;

export const JoinBtnGoogle = styled.div`
  width: 240px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid #c7c7c7;
  color : #f9f9f9;
  padding: 2px; 
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color : #656565;
  font-family: Nanum Barun Gothic;
  font-size : 15px;
  font-weight: bold;
`;

export const ErrorMsg = styled.div`
  width: 240px;
  height: 30px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #e670a1; */
  opacity:0.5;
  text-align: left;
  color : #e670a1;
  border-radius: 20px;
  font-family: Nanum Barun Gothic;
  font-size : 15px;
  outline: none;
`;