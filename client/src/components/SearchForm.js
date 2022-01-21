import React from 'react';
import styled from 'styled-components';
import { categoryList } from '../data/dummy';
import DropdownCategory from './common/DropdownCategory';
import Searchbar from './Searchbar';

const Wrapper = styled.form`
  display: flex;
`;

function SearchForm({ fillPostForm, submitPostForm }) {
  return (
    <Wrapper>
      <DropdownCategory
        list={categoryList}
        fillPostForm={fillPostForm}
      ></DropdownCategory>
      <Searchbar
        fillPostForm={fillPostForm}
        submitPostForm={submitPostForm}
      ></Searchbar>
    </Wrapper>
  );
}

export default SearchForm;
