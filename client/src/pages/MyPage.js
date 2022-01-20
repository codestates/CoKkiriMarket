import styled from "styled-components";
import axios from 'axios';

export const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 360px;
  height: 100%;
  border-radius: 30px;
  background-color: #f9f9f9;
  box-shadow: 0px 0px 20px #d5d5d5;
  padding: 2px; 
  position: fixed;
  bottom: 0;
`;

export const MyPageMenu = styled.div`
  width: 240px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #e8e7e7;
  background-color: #f9f9f9;
  padding: 2px; 
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 50px;
  text-align: center;
  color : #4f4f4f;
  font-family: Nanum Barun Gothic;
  font-size : 15px;
  font-weight: bold;
`;

export const MyPageId = styled.div`
  margin: 10px;
  width: 100px;
  color: black;
`;

export const MyMenuIcon = styled.img`
  margin: 10px;
  height: 28px;
`;

const MyPage = ({ userInfo, handleLogout }) => {

  const handleSignout = () => {

    const options = {
      method: 'post',
      url: 'https://api.cokkirimarket.xyz/user/signout',
      user: userInfo
    }

    const newUser = axios(options)
      .then((res) => {
        console.log('signout 성공')
        // history.push("/");
      })
      .catch((err) => {
        console.log('signout 실패')
    });
  }

  return (
    <MyPageContainer>
      {userInfo}
      <MyPageId></MyPageId>
      <MyPageMenu>
        <MyMenuIcon src="/icons/mygoods.png" />
        나의 판매내역
      </MyPageMenu>
      <MyPageMenu>
        <MyMenuIcon src="/icons/correct.png" />
        나의 정보수정
      </MyPageMenu>
      <MyPageMenu
        onClick={handleLogout}
      >
      <MyMenuIcon src="/icons/logout.png" />
        로그아웃 하기
      </MyPageMenu>
      <MyPageMenu
       onClick={handleSignout}
      >
        <MyMenuIcon src="/icons/cancel.png" />
        회원탈퇴 하기
      </MyPageMenu>

      {/* <Profile />
      <MyMenu /> */}
    </MyPageContainer>
  );
};

export default MyPage;