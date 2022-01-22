import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import SmallButton from '../components/common/SmallButton';
import PostButtonWrapper from '../components/PostButtonWrapper';
import { Modal } from '../components/Modal';

function Post({ isLogin, accessToken, userInfo }) {
  const { pathname } = useLocation();
  const postId = Number(pathname.split('/')[2]);
  const [postInfo, setPostInfo] = useState({});

  useEffect(() => {
    console.log(postId);
    console.log(accessToken); // string('')
    console.log(userInfo); // useremail
    /* !서버에서 post 정보 받아오는 요청! */
    /* getPostDetails() */
  }, []);

  const getPostDetails = () => {
    const options = {
      method: 'get',
      /* !쿼리로 포스트 아이디! */
      url: `https://dev.cokkiriserver.xyz/search`
    };

    axios(options)
      .then((res) => {
        console.log(res.data);
      })
      .catch();
  };

  const result = {
    id: 16,
    image_src:
      'https://dnvefa72aowie.cloudfront.net/origin/article/202201/b983f3fcb31388cc23d89e6e70a5279062f1accd3fa8bdd0d7ec6f6d7540fa04.webp?q=95&s=1440x1440&t=inside',
    price: '15000',
    user_id: 3,
    author: '김코딩',
    title: 'sk 매직 전자렌지 팔아요!!!',
    updatedAt: '2022-01-21T05:54:23.000Z',
    contents: '정상 작동 하구요, 이사 때문에 판매해요^^'
  };

  const changeDateForm = (prev) => {
    let curr = prev.slice(0, 10).split('-');
    return `${curr[0]}년 ${curr[1]}월 ${curr[2]}일`;
  };

  // const deletePost = ()=>{
  //   const options = {
  //     method: 'delete',
  //     url: `https://dev.cokkiriserver.xyz/`
  //   };

  //   axios(options)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch();
  // }

  return (
    <Main height='100vh'>
      <Modal></Modal>
      <Section height='20rem'>
        <Img height='100%' src={result.image_src} />
      </Section>
      <MainSection height='5rem'>
        <Price fontSize='1.5rem' fontWeight='700'>
          {result.price} 원
        </Price>
        <PostButtonWrapper
          isLogin={isLogin}
          accessToken={accessToken}
        ></PostButtonWrapper>
      </MainSection>
      <InfoSection height='18rem'>
        <Title fontSize='1.4rem' fontWeight='700'>
          {result.title}
        </Title>
        <PostInfo fontSize='0.9rem' fontWeight='200'>
          {result.author} * {changeDateForm(result.updatedAt)}
        </PostInfo>
        <p>{result.contents}</p>
      </InfoSection>
    </Main>
  );
}

const layout = css`
  width: ${({ width }) => (width && `${width}`) || '100%'};
  height: ${({ height }) => (height && `${height}`) || `1px`};
  padding: 0.5rem;
`;

const Main = styled.main`
  ${layout}
  background-color: ${({ theme }) => theme.colors.grey_light};
`;

const Section = styled.section`
  ${layout}
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  background-color: white;

  &:first-child {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  &:last-child {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

const MainSection = styled(Section)`
  display: flex;
  align-items: center;
  padding: 1rem 1.4rem;
  position: relative;
`;

const InfoSection = styled(Section)`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const font = css`
  font-size: ${({ fontSize }) => fontSize && `${fontSize}`};
  font-weight: ${({ fontWeight }) => fontWeight && ` ${fontWeight}`};
`;

const Price = styled.span`
  ${font}
`;

const Title = styled.h2`
  ${font}
`;

const PostInfo = styled.span`
  ${font}
  color: ${({ theme }) => theme.colors.grey_dark}
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export default Post;
