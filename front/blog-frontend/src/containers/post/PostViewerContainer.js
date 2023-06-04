import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../components/post/PostViewer';
import PostActionButtons from '../../components/post/PostActionButtons';
//import { setOriginalPost } from '../../modules/write';
import { removePost } from '../../lib/api/posts';
import { useParams, useNavigate } from 'react-router-dom';
import CommentViewer from '../../components/post/CommentViewer';

const PostViewerContainer = ({ bookId }) => {
  // 처음 마운트될 때 포스트 읽기 API 요청
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post, error, loading, user } = useSelector(
    ({ post, loading, user }) => ({
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST'],
      user: user.user,
    }),
  );

  useEffect(() => {
    dispatch(readPost({ bookId, postId }));
    console.log('postviewercontainer에서 받은', bookId);
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, bookId, postId]);

  // const onEdit = () => {
  //   dispatch(setOriginalPost(post));
  //   navigate('/write');
  // };

  const onRemove = async () => {
    try {
      await removePost({ bookId, postId });
      navigate(-1); // 글 목록으로
    } catch (e) {
      console.log(e);
    }
  };

  //const ownPost = (user && user.id) === (post && post.user.id);
  const ownPost = (user && user.loginId) === (post && post.user.loginId);

  return (
    <>
      <PostViewer
        post={post}
        loading={loading}
        error={error}
        actionButtons={
          // ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
          ownPost && <PostActionButtons onRemove={onRemove} />
        }
      />
      <CommentViewer />
    </>
  );
};

export default PostViewerContainer;
