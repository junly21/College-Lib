import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const StyledInput = styled.input`
  font-size: 1rem;
  border: 2px solid ${palette.gray[7]};
  border-radius: 15px;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;

  width: 500px;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  //background-color: ${palette.red[1]};
  margin-left: 1rem;
  margin-top: 1rem;
`;

const SearchBar = () => {
  const navigate = useNavigate();
  const [keyword, setSearchTerm] = useState('');

  const onSearch = () => {
    navigate(`/search/${keyword}`);
  };

  const onChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };

  return (
    <SearchBarContainer>
      <StyledInput search="bookname" value={keyword} onChange={onChange} />
      <Button onClick={onSearch}>검색</Button>
    </SearchBarContainer>
  );
};

export default SearchBar;
