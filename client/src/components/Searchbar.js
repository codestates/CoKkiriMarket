import React from 'react';
import styled from 'styled-components';
import SmallButton from './common/SmallButton';

const SearchInput = styled.input``;

function Searchbar({ fillPostForm, submitPostForm }) {
  return (
    <>
      <SearchInput
        type='text'
        onChange={(e) => fillPostForm({ word: e.target.value })}
      />
      <SmallButton onClickHandler={submitPostForm}>검 색</SmallButton>
    </>
  );
}

export default Searchbar;
