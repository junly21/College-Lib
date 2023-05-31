import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const StyledInput = styled.input`
  font-size: 1rem;
  border: 2px solid ${palette.gray[7]};
  border-radius: 15px;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;

  width: 500px;
`;

const SearchBar = () => {
  const navigate = useNavigate();

  const Search = () => {
    navigate('/');
  };

  const onChange = () => {};
  return (
    <>
      <StyledInput search="bookname" onChange={onChange} />
      <Button onClick={Search}>검색</Button>
    </>
  );
};

export default SearchBar;
