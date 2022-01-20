import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 4rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.blue_light};
  border-radius: 5px;
  box-shadow: 1px 1px 3px ${({ theme }) => theme.colors.grey2};
  background-color: ${({ theme }) => theme.colors.blue_base};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  position: absolute;
  right: 1%;
  top: 1%;
`;

function SmallButton(props) {
  return <Button onClick={props.onClickHandler}>{props.children}</Button>;
}

export default SmallButton;
