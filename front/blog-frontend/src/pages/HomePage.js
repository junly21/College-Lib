import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Button from '../components/common/HomeSearchButton';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/common/HomeSearchBar';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';

const BookImage = styled.img`
  width: 100%;
  border: 5px solid #000000;
  border-radius: 15px;
`;

const HomePageBlock = styled(Responsive)`
  margin-top: 1.5rem;
`;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer />
      <HomePageBlock>
        <div className="c1image">
          <BookImage src="/img/homeImg.jpeg" />
        </div>
        <SearchBar />
      </HomePageBlock>
    </>
  );
};

export default HomePage;
