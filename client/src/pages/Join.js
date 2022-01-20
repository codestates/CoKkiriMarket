import styled from "styled-components"; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Modal } from "../components/Modal";

const Join = () => {
  const navigate = useNavigate();
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
      const data = {
        email: email,
        user_id: id,
        password: pw
      }

      const options = {
        method: 'post',
        url: 'https://dev.cokkiriserver.xyz/user/signup',
        data: data
      }

    axios(options)
    .then((res) => {
      console.log(res)
      console.log(res.status)
      navigate('/login');
    })
    .catch(function (error) {
      if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        setErrorMessage('회원가입 중 에러가 발생하였습니다')
      }
      else if (error.request) {
        // 요청이 이루어 졌으나 응답을 받지 못했습니다.
        // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
        // Node.js의 http.ClientRequest 인스턴스입니다.
        setErrorMessage('회원가입 중 에러가 발생하였습니다')
        console.log(error.request);
      }
      else {
        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
        setErrorMessage('회원가입 중 에러가 발생하였습니다')
        console.log('Error', error.message);
      }
      console.log(error.config);
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
          onKeyUp={handleInputValue()} 
          placeholder='이메일'></JoinInput></JoinInputContainer>
        <ErrorMsg>{emailErrMsg}</ErrorMsg>


        <JoinInputContainer><JoinInput 
          type='password'
          onChange={handleInputValue('password')} 
          onKeyUp={handleInputValue()} 
          placeholder='비밀번호 (총 4자 이상 12자 이하, 숫자/영문자 포함)'
        ></JoinInput></JoinInputContainer>
        <ErrorMsg>{passwordErrMsg}</ErrorMsg> 


        <JoinInputContainer><JoinInput 
          type='password'
          onChange={handleInputValue('passwordretype')} 
          onKeyUp={handleInputValue()} 
          placeholder='비밀번호 확인'></JoinInput></JoinInputContainer>
         <ErrorMsg>{passwordReErrMsg}</ErrorMsg> 


         <JoinInputContainer><JoinInput 
          type='text'
          onChange={handleInputValue('user_id')} 
          onKeyUp={handleInputValue()} 
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