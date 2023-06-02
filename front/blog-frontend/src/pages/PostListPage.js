import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import { useParams } from 'react-router-dom';
import PostListContainer from '../containers/posts/PostListContainer';
import book from '../modules/book';

const PostListPage = () => {
  const { bookId, tags } = useParams();
  // console.log('bookid는', bookId);
  // console.log('tag는', tags);
  return (
    <>
      <HeaderContainer />
      <PostListContainer bookId={bookId} tag={tags} />
    </>
  );
};

export default PostListPage;
