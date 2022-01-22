import React, { useRef } from 'react';
import styled from 'styled-components';
import { categoryList } from '../data/dummy';
import DropdownCategory from './common/DropdownCategory';

const FormWrapper = styled.div`
  width: 100%;
  height: 90vh;
  padding: 2rem 0;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey_light};
`;

const ImgWrapper = styled.div`
  width: 100%;
  margin: 3rem 0 1rem 0;
  display: flex;
  justify-content: center;
`;

const Preview = styled.div`
  width: 55%;
  height: 6.5rem;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 30px;
  box-shadow: 1px 1px 10px -5px ${({ theme }) => theme.colors.blue_base};
`;

export const SingleInput = styled.input`
  width: 85%;
  height: 3rem;
  padding: 0 5%;
  margin-bottom: 1rem;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: 1px 1px 10px -5px ${({ theme }) => theme.colors.blue_base};
`;

const FileInput = styled(SingleInput)`
  display: none;
`;

const Textarea = styled.textarea`
  width: 85%;
  height: 15rem;
  padding: 5%;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 30px;
  box-shadow: 1px 1px 10px -5px ${({ theme }) => theme.colors.blue_base};
`;

function FormData({ fillPostForm }) {
  const fileRef = useRef(null);

  const previewHandler = (e) => {
    console.log(e.target.files[0]);
    /* !클라우드 플레어 url 받아오기! */
    /* !setPreview 후, Preview 띄우기! */
  };

  return (
    <FormWrapper>
      <ImgWrapper>
        <Preview onClick={() => fileRef.current.click()}></Preview>
        <FileInput
          type='file'
          ref={fileRef}
          accept='.jpeg, .jpg, .png'
          onChange={(e) => previewHandler(e)}
        />
      </ImgWrapper>
      <SingleInput
        type='text'
        placeholder='제목을 입력하세요'
        onChange={(e) => fillPostForm({ title: e.target.value })}
      />
      <DropdownCategory
        list={categoryList.slice(1)}
        fillPostForm={fillPostForm}
        width='85%'
      ></DropdownCategory>
      <SingleInput
        type='number'
        placeholder='가격을 입력하세요'
        onChange={(e) => fillPostForm({ price: e.target.value })}
      />
      <Textarea
        placeholder='내용을 입력하세요'
        onChange={(e) => fillPostForm({ description: e.target.value })}
      ></Textarea>
    </FormWrapper>
  );
}

export default FormData;
