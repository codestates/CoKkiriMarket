import React, { useState } from 'react';
import validationCheckAPI from '../api';
import SmallButton from '../components/common/SmallButton';
import PostFormData from '../components/PostFormData';

function Add() {
  const [postForm, setPostForm] = useState({
    title: '',
    contents: '',
    price: '',
    categories: 0,
    image_src: ''
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
        <PostFormData fillPostForm={fillPostForm}></PostFormData>
      </form>
    </main>
  );
}

export default Add;
