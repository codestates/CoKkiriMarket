import React, { useState } from 'react';
import validationCheckAPI from '../api';
import SmallButton from '../components/common/SmallButton';
import FormData from '../components/FormData';

function Add() {
  const [postForm, setPostForm] = useState({
    img: '',
    category: 0,
    title: '',
    price: '',
    description: ''
  });

  const submitPostForm = (e) => {
    e.preventDefault();
    if (!validationCheckAPI.checkPostFormValid(postForm)) {
      /* !제대로 폼 채우라는 모달창 띄우고 리턴! */
      console.log(postForm);
      console.log('try again');
      return;
    }
    /* !postForm axios로 전송하는 로직! */
    console.log(postForm);
  };

  const fillPostForm = (data) => {
    setPostForm(Object.assign(postForm, data));
  };

  return (
    <main>
      <form>
        <SmallButton right='0' onClickHandler={submitPostForm}>
          등 록
        </SmallButton>
        <FormData fillPostForm={fillPostForm}></FormData>
      </form>
    </main>
  );
}

export default Add;
