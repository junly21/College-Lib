import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/common/SearchBar';

const HomePage = () => {
  const navigate = useNavigate();

  const goWrite = () => {
    navigate('/write');
  };
  return (
    <>
      <HeaderContainer />
      <SearchBar />

      <div>
        <Button onClick={goWrite}>글쓰기</Button>
      </div>
    </>
  );
};

export default HomePage;
