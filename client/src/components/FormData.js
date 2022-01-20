import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 100%;
  height: 90vh;
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

const Input = styled.input`
  width: 85%;
  height: 4rem;
  padding: 0 5%;
  margin-bottom: 1rem;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: 1px 1px 10px -5px ${({ theme }) => theme.colors.blue_base};
`;

const FileInput = styled(Input)`
  display: none;
`;

const Textarea = styled.textarea`
  width: 85%;
  height: 20rem;
  padding: 5%;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 30px;
  box-shadow: 1px 1px 10px -5px ${({ theme }) => theme.colors.blue_base};
`;

function FormData() {
  return (
    <FormWrapper>
      <ImgWrapper>
        <Preview></Preview>
        <FileInput type='file' />
      </ImgWrapper>
      <Input type='text' placeholder='제목을 입력하세요' />
      <Input type='number' placeholder='가격을 입력하세요' />
      <Textarea placeholder='내용을 입력하세요'></Textarea>
    </FormWrapper>
  );
}

export default FormData;
