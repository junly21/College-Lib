import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import { useParams } from 'react-router-dom';
import PostListContainer from '../containers/posts/PostListContainer';
import book from '../modules/book';

const PostListPage = () => {
  const { bookId, tags } = useParams();
  console.log(bookId, tags);
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
    </>
  );
};

export default PostListPage;
