import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import CommentWritingContainer from '../../containers/post/CommentWritingContainer';

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

// const CommentViewer = ({ post, error, loading, actionButtons }) => {
//   // 로딩중이거나, 아직 포스트 데이터가 없을 시
//   if (loading || !post) {
//     return null;
//   }
//   const { title, body, user, publishedDate, tags } = post;

//   return (
//     <PostViewerBlock>
//       <PostHead>
//         <h3>{title}</h3>
//         <SubInfo>
//           <span>
//             <b>{user.username}</b>
//           </span>
//           <span>{new Date(publishedDate).toLocaleDateString()}</span>
//         </SubInfo>
//         <Tags tags={tags}></Tags>
//       </PostHead>

//       <PostContent dangerouslySetInnerHTML={{ __html: body }} />
//       {actionButtons}
//     </PostViewerBlock>
//   );
// };

const CommentViewer = () => {
  return (
    <CommentViewerBlock>
      <CommentHead>
        <h4>닉네임</h4>
        <CommentContent>가나다라</CommentContent>
      </CommentHead>
      <CommentHead>
        <h4>닉네임</h4>
        <CommentContent>가나다라</CommentContent>
      </CommentHead>
      <CommentHead>
        <h4>닉네임</h4>
        <CommentContent>가나다라</CommentContent>
      </CommentHead>
      <CommentWritingContainer />
    </CommentViewerBlock>
  );
};

export default CommentViewer;
