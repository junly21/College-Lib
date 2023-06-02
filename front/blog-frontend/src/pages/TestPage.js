import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import { useParams } from 'react-router-dom';

const TestPage = () => {
  const { bookId, tags } = useParams();
  console.log('bookid는', bookId);
  console.log('tag는', tags);
  return (
    <>
      <HeaderContainer />
    </>
  );
};

export default TestPage;
