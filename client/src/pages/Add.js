import React, { useState } from 'react';
import SmallButton from '../components/common/SmallButton';
import FormData from '../components/FormData';

function Add() {
  const [postForm, setPostForm] = useState({
    img: '',
    title: '',
    price: '',
    description: ''
  });

  const submitPostForm = (e) => {
    e.preventDefault();
    console.log(postForm);
  };

  const fillPostForm = (data) => {
    setPostForm(Object.assign(postForm, data));
  };

  return (
    <main>
      <form>
        <SmallButton onClickHandler={submitPostForm}>등 록</SmallButton>
        <FormData fillPostForm={fillPostForm}></FormData>
      </form>
    </main>
  );
}

export default Add;
