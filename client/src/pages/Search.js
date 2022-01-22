import React, { useState } from 'react';
import axios from 'axios';
import PostList from '../components/postList/PostList';
import SearchForm from '../components/SearchForm';
import validationCheckAPI from '../api';

function Search() {
  const [postForm, setPostForm] = useState({ category: 0, word: '' });
  const [postList, setPostList] = useState([]);

  const fillPostForm = (data) => {
    setPostForm(Object.assign(postForm, data));
  };

  const submitPostForm = (e) => {
    e.preventDefault();
    if (!validationCheckAPI.checkSearchFormValid(postForm)) {
      console.log('try again');
      return;
    }
    getSearchList();
  };

  const getSearchList = () => {
    const options = {
      method: 'post',
      url: `https://dev.cokkiriserver.xyz/search`,
      data: {
        payload: {
          query: postForm.word,
          category_id: postForm.category
        }
      }
    };

    axios(options)
      .then((res) => {
        setPostList(res.data.data);
      })
      .catch();
  };

  return (
    <main>
      <SearchForm
        fillPostForm={fillPostForm}
        submitPostForm={submitPostForm}
      ></SearchForm>
      <PostList posts={postList}></PostList>
    </main>
  );
}

export default Search;
