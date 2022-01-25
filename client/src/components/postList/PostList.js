import React from 'react';
import styled from 'styled-components';
import PostListItem from './PostListItem';

const PostListWrapper = styled.ul`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.grey_light};
`;

function PostList({ posts }) {
  return (
    <PostListWrapper>
      {posts.map((post) => {
        return <PostListItem key={post.id} info={post} />;
      })}
    </PostListWrapper>
  );
}

export default PostList;
