import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readBookInfo, unloadBookInfo } from '../../modules/book';
import BookInfo from '../../components/book/BookInfo';
import { useParams, useNavigate } from 'react-router-dom';

const BookViewerContainer = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { book, error, loading } = useSelector(({ book, loading, user }) => ({
    book: book.book,
    error: book.error,
    loading: loading['book/READ_INFO'],
    user: user.user,
  }));

  useEffect(() => {
    dispatch(readBookInfo(id));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
  }, [dispatch, id]);

  console.log('BookviewerContainer:', id);
  console.log('book', book);

  return <BookInfo book={book} loading={loading} error={error} />;
};

export default BookViewerContainer;
