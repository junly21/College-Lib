import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import BookInfo from '../components/book/BookInfo';
import BookViewerContainer from '../containers/book/BookViewerContainer';
import SearchBar from '../components/common/SearchBar';
import { useParams } from 'react-router-dom';

const BookInfoPage = () => {
  const { bookId } = useParams();
  //const bookId = { id };
  //console.log('bookidparam', bookId);
  return (
    <>
      <HeaderContainer />
      <SearchBar />
      <BookViewerContainer id={bookId} />
    </>
  );
};

export default BookInfoPage;
