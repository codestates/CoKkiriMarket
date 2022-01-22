import React, { useState } from 'react';
import SmallButton from './common/SmallButton';
import { Modal } from './common/Modal';
import { useNavigate } from 'react-router-dom';

function PostButtonWrapper({ isLogin, accessToken }) {
  const isAuthor = false; // 임시로 고정
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const modalHandler = (a) => {
    setShowModal(a);
  };

  return isAuthor ? (
    <>
      <SmallButton
        right='5rem'
        onClickHandler={() => {
          console.log('수정');
        }}
      >
        수정
      </SmallButton>
      <SmallButton
        right='0px'
        onClickHandler={() => {
          console.log('삭제');
        }}
      >
        삭제
      </SmallButton>
    </>
  ) : (
    <>
      <SmallButton
        right='0px'
        onClickHandler={() => {
          !isLogin && setShowModal(true);
          /* !로그인 된 경우 채팅으로 이동! */
        }}
      >
        채팅하기
      </SmallButton>
      {showModal && (
        <>
          <Modal modalHandler={modalHandler}>
            <span>로그인 해주세요!</span>
            <SmallButton
              bottom='0'
              right='33%'
              onClickHandler={() => navigate('/login')}
            >
              로그인
            </SmallButton>
          </Modal>
        </>
      )}
    </>
  );
}

export default PostButtonWrapper;
