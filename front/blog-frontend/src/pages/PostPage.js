import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostViewer from '../components/post/PostViewer';
import PostViewerContainer from '../containers/post/PostViewerContainer';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const { bookId } = useParams();
  console.log('PostPage에 BookId전달확인', bookId);
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer bookId={bookId} />
    </>
  );
};

export default PostPage;
