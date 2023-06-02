import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import SearchListContainer from '../containers/searchlist/SearchListContainer';
//import SearchList from '../components/searchlist/SearchList';

import { useParams } from 'react-router-dom';

const SearchListPage = () => {
  const { keyword } = useParams();

  console.log(keyword);
  return (
    <>
      <HeaderContainer />
      <SearchListContainer keyword={keyword} />
    </>
  );
};

export default SearchListPage;
