import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { writePost } from '../../modules/write';
import { useNavigate } from 'react-router-dom';

const WriteActionButtonsContainer = ({ bookId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, body, tags, post, postError, originalPostId } = useSelector(
    ({ write, book }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
    }),
  );

  // 포스트 등록
  const onPublish = () => {
    console.log('WriteActionButtons전달확인', bookId);
    dispatch(
      writePost({
        title,
        body,
        tags,
        bookId,
      }),
    );
  };

  // 취소
  const onCancel = () => {
    navigate(-1);
  };

  // 성공 혹은 실패시 할 작업
  useEffect(() => {
    if (post) {
      const { id } = post;
      navigate(`/${bookId}/${id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);
  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostId}
    />
  );
};

export default WriteActionButtonsContainer;
