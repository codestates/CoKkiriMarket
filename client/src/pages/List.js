import React from 'react';
import { Link } from 'react-router-dom';
import CircleButton from '../components/common/CircleButton';
import PostList from '../components/postList/PostList';
import postDataList from '../data/postList';

function List() {
  /* axios로 데이터 GET 요청 */

  return (
    <main>
      <PostList posts={postDataList}></PostList>
      <Link to='/add'>
        <CircleButton>+</CircleButton>
      </Link>
    </main>
  );
}

export default List;
