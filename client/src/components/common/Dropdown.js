import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { categoryData } from '../../data/dummy';

const Wrapper = styled.div`
  width: 85%;
  height: 3rem;
  padding: 0 5%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: 1px 1px 10px -5px ${({ theme }) => theme.colors.blue_base};
  background-color: white;
  cursor: pointer;
`;

const Ul = styled.ul`
  width: 85%;
  position: absolute;
  top: 3rem;
`;

const Li = styled.li`
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.colors.blue_light};

  &:last-child {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey2};
  }
`;

function Dropdown({ fillPostForm }) {
  const dropDownRef = useRef(null);
  const [category, setCategory] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const onCategoryClickHandler = (item) => {
    setCategory(item);
    fillPostForm({ category: item });
  };

  return (
    <Wrapper ref={dropDownRef} onClick={() => setIsOpen(!isOpen)}>
      <span>{category ? category : '카테고리를 선택하세요'}</span>
      <span> ▼ </span>
      <Ul>
        {isOpen &&
          categoryData.map((item, idx) => {
            /* !key 임시로 idx 사용. 수정할 것! */
            return (
              <Li key={idx} onClick={() => onCategoryClickHandler(item)}>
                {item}
              </Li>
            );
          })}
      </Ul>
    </Wrapper>
  );
}

export default Dropdown;
