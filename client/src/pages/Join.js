import styled from "styled-components"; 
import { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { Modal } from "../components/Modal";

const Join = () => {
  const [userinfo, setuserinfo] = useState({
    email: '',
    user_id: '',
    password: '',
    passwordretype: ''
  });

  const email = userinfo.email
  const id = userinfo.user_id
  const pw = userinfo.password
  const pwRe = userinfo.passwordretype

  // const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');
  const [emailErrMsg, setEmailErrMsg] = useState('');
  const [passwordErrMsg, setPasswordErrMsg] = useState('');
  const [passwordReErrMsg, setPasswordReErrMsg] = useState('');
  const handleInputValue = (key) => (e) => {

    setuserinfo({ ...userinfo, [key]: e.target.value });

    if(pw!=='' && pwRe!=='' && pw!==pwRe) setPasswordReErrMsg('동일한 비밀번호를 입력하세요')
    else setPasswordReErrMsg('')

    const checkPassword = (e) => {
      const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,12}$/
      return regExp.test(e)
    }  
    if(pw!=='') {
      if(!checkPassword(pw)) setPasswordErrMsg('4~12자 사이 숫자/영문자만 가능합니다')
      else setPasswordErrMsg('')
    }

    const checkEmail = (e) => {
      const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
      return regExp.test(e)
    }  
    if(email!=='') {
      if(!checkEmail(email)) setEmailErrMsg('유효한 이메일 형식이 아닙니다')
      else setEmailErrMsg('')
    }

  };

  const handleJoin = () => {

    if(id===''|| pw===''|| pwRe===''|| email==='')return setErrorMessage('빈칸을 모두 입력하세요')
    if(pw!=='' && pwRe!=='' && pw!==pwRe)return setPasswordReErrMsg('동일한 비밀번호를 입력하세요')

    else{
      const options = {
        method: 'post',
        url: 'https://api.cokkirimarket.xyz/user/signup',
        data: userinfo
    }
    const newUser = axios(options)
      .then((res) => {
        // history.push("/");
      })
      .catch((err) => {
        setErrorMessage('회원가입 중 에러가 발생하였습니다')
      });
    }

  };

  return (
    <JoinContainer >
      <JoinTitle>JOIN</JoinTitle>
      <form onSubmit={(e) => e.preventDefault()}>        
        <JoinInputContainer><JoinInput 
          type='email'
          onChange={handleInputValue('email')} 
          placeholder='이메일'></JoinInput></JoinInputContainer>
        <ErrorMsg>{emailErrMsg}</ErrorMsg>


        <JoinInputContainer><JoinInput 
          type='password'
          onChange={handleInputValue('password')} 
          placeholder='비밀번호 (총 4자 이상 12자 이하, 숫자/영문자 포함)'
        ></JoinInput></JoinInputContainer>
        <ErrorMsg>{passwordErrMsg}</ErrorMsg> 


        <JoinInputContainer><JoinInput 
          type='password'
          onChange={handleInputValue('passwordretype')} 
          placeholder='비밀번호 확인'></JoinInput></JoinInputContainer>
         <ErrorMsg>{passwordReErrMsg}</ErrorMsg> 


         <JoinInputContainer><JoinInput 
          type='text'
          onChange={handleInputValue('user_id')} 
          placeholder='닉네임' 
        /></JoinInputContainer>  
      </form> 
      <ErrorMsg>{errorMessage}</ErrorMsg>
      <JoinLine />
      <JoinBtn 
        type='submit'
        onClick={handleJoin}
      >회원가입</JoinBtn>


    </JoinContainer>
  );
};

export const JoinContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const JoinTitle = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  color : #636363;
  font-family: Nanum Barun Gothic;
  font-size : 40px;
  font-weight: bold;
`;

export const JoinContents = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  color : #636363;
  font-family: Nanum Barun Gothic;
  font-size : 14px;
  font-weight: bold;
`;

export const JoinInputContainer = styled.div`
  width: 280px;
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

export const JoinInput = styled.input`
  width: 88%;
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


export const JoinBtn = styled.div`
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

export const JoinLine = styled.div`
  width: 240px;
  height: 2px;
  border-radius: 20px;
  background-color: #cdcbcb;
  margin: 10px;
`;

export const ErrorMsg = styled.div`
  width: 240px;
  height: 30px;
  border: none;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* background-color: #e670a1; */
  margin-left: 20px;
  opacity:0.5;
  text-align: left;
  color : #e670a1;
  border-radius: 20px;
  font-family: Nanum Barun Gothic;
  font-size : 15px;
  outline: none;
`;


export default Join;