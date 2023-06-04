import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import CommentWritingContainer from '../../containers/post/CommentWritingContainer';
import CommentActionButtons from '../../components/post/CommentActionButtons';

const CommentViewerBlock = styled(Responsive)`
  border: 1px solid ${palette.red[1]};
  margin: 4rem;
  padding-bottom: 4rem;
`;
const CommentHead = styled.div`
  border-bottom: 1px solid ${palette.red[0]};
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
  margin-top: 1rem;
`;

const SubInfo = styled.div`
  margin-top: 1rem;
  // border: 1px solid ${palette.red[1]};
  color: ${palette.gray[6]};

  span+span: before {
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;

const CommentContent = styled.div`
  font-size: 1rem;
  color: ${palette.gray[8]};
  margin-bottom: 1rem;
`;

const CommentItem = ({ comment, postuser }) => {
  const { user, text } = comment; //기타 책 정보들 SearchListContainer에서 props로 줄거임.
  const filteredText = JSON.parse(text).body;

  const ownPost = postuser === (user && user.loginId);

  return (
    <CommentHead>
      {user.username}
      <CommentContent>{filteredText}</CommentContent>
      {ownPost && <CommentActionButtons />}
    </CommentHead>
  );
};

const CommentViewer = ({ postId, bookId, loading, post, user }) => {
  if (loading || !post) {
    return null;
  }
  const comments = post.comments;
  const postuser = user.loginId;
  return (
    <CommentViewerBlock>
      {!loading && comments && (
        <div>
          {comments.map((comment) => (
            <CommentItem comment={comment} postuser={postuser} />
          ))}
        </div>
      )}
      <CommentWritingContainer postId={postId} bookId={bookId} />
    </CommentViewerBlock>
  );
};

export default CommentViewer;
