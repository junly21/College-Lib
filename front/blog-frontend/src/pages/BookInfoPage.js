import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import BookInfo from '../components/book/BookInfo';
import BookViewerContainer from '../containers/book/BookViewerContainer';

import { useParams } from 'react-router-dom';

const BookInfoPage = () => {
  const id = useParams();
  //const bookId = { id };
  console.log('bookidparam', id);
  return (
    <>
      <HeaderContainer />
      <BookViewerContainer />
    </>
  );
};

export default BookInfoPage;
