//주소에 있는 쿼리 파라미터추출해서 listPosts API(포스트 목록 받아오는) 호출
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/posts/PostList';
import { listPosts } from '../../modules/posts';
import { useParams, useSearchParams } from 'react-router-dom';

const PostListContainer = ({ bookId, tag }) => {
  const { username } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { posts, error, loading, user, tags } = useSelector(
    ({ posts, loading, user, book }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
      tags: posts.tags,
      bookId: book.id,
    }),
  );
  useEffect(() => {
    //buy게시판 가면
    dispatch(listPosts(bookId, tag)); //
  }, [dispatch, bookId, tag, searchParams]);

  console.log('container', bookId, tag);
  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user}
      bookId={bookId}
    />
  );
};

export default PostListContainer;
