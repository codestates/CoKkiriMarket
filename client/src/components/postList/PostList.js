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
      {posts.map((good) => {
        return <PostListItem key={good.id} info={good} />;
      })}
    </PostListWrapper>
  );
}

export default PostList;
