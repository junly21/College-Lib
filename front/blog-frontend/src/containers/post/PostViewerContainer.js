import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../components/post/PostViewer';
import PostActionButtons from '../../components/post/PostActionButtons';
import { setOriginalPost } from '../../modules/write';
import { removePost } from '../../lib/api/posts';
import { useParams, useNavigate } from 'react-router-dom';
import CommentViewer from '../../components/post/CommentViewer';
import Button from '../../components/common/Button';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const ButtonBlock = styled.div`
  width: 75%;
  margin-left: 4rem;
  margin-right: 4rem;
  margin-top: -2rem;
  margin-bottom: -2rem;
  display: flex;
  justify-content: flex-end;
`;

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
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, bookId, postId]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    navigate(`/${bookId}/write`);
  };
  const onRemove = async () => {
    try {
      await removePost({ bookId, postId });
      navigate(-1); // 글 목록으로
    } catch (e) {
      console.log(e);
    }
  };

  const onClick = () => {
    let tag = '';
    if (post.tags === '삽니다') tag = 'buy';
    else if (post.tags === '팝니다') tag = 'sell';
    else if (post.tags === '질문') tag = 'qa';
    navigate(`/${bookId}/board/${tag}`);
  };

  const ownPost = (user && user.loginId) === (post && post.user.loginId);

  return (
    <>
      <PostViewer
        post={post}
        loading={loading}
        error={error}
        actionButtons={
          ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
        }
      />
      <ButtonBlock>
        <Button onClick={onClick}>목록</Button>
      </ButtonBlock>
      <CommentViewer
        postId={postId}
        bookId={bookId}
        loading={loading}
        post={post}
        user={user}
      />
    </>
  );
};

export default PostViewerContainer;
