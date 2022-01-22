import React from 'react';
import SmallButton from './common/SmallButton';

function PostButtonWrapper({ isLogin, accessToken }) {
  const isAuthor = true; // 임시로 고정

  return isAuthor ? (
    <>
      <SmallButton right='5rem'>수정</SmallButton>
      <SmallButton right='0px'>삭제</SmallButton>
    </>
  ) : (
    <SmallButton right='0px'>채팅하기</SmallButton>
  );
}

export default PostButtonWrapper;
