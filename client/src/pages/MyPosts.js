import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PostList from '../components/postList/PostList';

export const EmptyContainer = styled.div``;
export const EmptyIcon = styled.img``;

const MyPosts = ({ accessToken }) => {
  const [myposts, setMyposts] = useState([]);

  const getPostList = () => {
    const options = {
      method: 'get',
      url: `https://dev.cokkiriserver.xyz/post/my`,
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    };

    axios(options)
      .then((res) => {
        setMyposts(res.data.data);
      })
      .catch();
  };

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <main>
      {myposts.length !== 0 ? (
        <PostList posts={myposts}></PostList>
      ) : (
        <EmptyContainer>
          <EmptyIcon src='/icons/box.png' />
        </EmptyContainer>
      )}
    </main>
  );
};

export default MyPosts;
