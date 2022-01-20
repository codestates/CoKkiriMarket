import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100vw;
  height: 50px;
  padding: 5px 0;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

const Wrapper = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  padding: 0 3vw;
  align-items: center;
`;

const LogoWrapper = styled(Wrapper)`
  justify-content: center;
`;

const Icon = styled.img`
  height: 98%;
  cursor: pointer;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Wrapper>
        <Icon src='./icons/arrow-small-left.png' />
      </Wrapper>
      <LogoWrapper>
        <Icon src='./icons/elephant.png' />
      </LogoWrapper>
    </HeaderWrapper>
  );
}

export default Header;
