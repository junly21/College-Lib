import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { useState } from 'react';
import { writeComment } from '../../modules/comment';
import { useSelector, useDispatch } from 'react-redux';

const StyledInput = styled.input`
  margin-top: 1rem;
  height: 3rem;
  font-size: 1rem;
  border: none;
  border: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const CommentWriteButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const CommentWriteButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${palette.gray[6]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background: ${palette.gray[1]};
    color: ${palette.red[1]};
  }
  & + & {
    margin-left: 0.25rem;
  }
`;

const CommentWritingContainer = () => {
  const { post } = useSelector(({ comment, post }) => ({
    post: post.post,
  }));
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  const postId = post.id;

  const onChange = (e) => {
    setComment(e.target.value);
    console.log('댓글입력 테스트', comment, postId);
  };

  const onSubmit = () => {
    //댓글 내용변수 comment를 dispatch한다.

    dispatch(writeComment({ comment, postId }));
  };

  return (
    <div className="commentContainer">
      <form className="commentWrap">
        <StyledInput
          type="text"
          placeholder="댓글을 입력하세요"
          value={comment}
          onChange={onChange}
        />
        <CommentWriteButtonBlock>
          <CommentWriteButton onClick={onSubmit}>등록</CommentWriteButton>
        </CommentWriteButtonBlock>
      </form>
    </div>
  );
};

export default CommentWritingContainer;
