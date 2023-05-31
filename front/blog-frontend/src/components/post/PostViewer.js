import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
// import SubInfo from '../common/SubInfo';
// import Tags from '../common/Tags';
// import { Helmet } from 'react-helmet-async';

const PostViewerBlock = styled(Responsive)`
  border: 1px solid ${palette.red[1]};
  margin: 4rem;
  height: ;
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const SubInfo = styled.div`
  margin-top: 1rem;
  border: 1px solid ${palette.red[1]};
  color: ${palette.gray[6]};

  span+span: before {
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;

const Tags = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.red[1]};
    text-decoration: none;
    margin-right: 0.5rem;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

//  const PostViewer = ({ post, error, loading, actionButtons, ownPost }) => {
//   // 에러 발생 시
//   if (error) {
//     if (error.response && error.response.status === 404) {
//       return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
//     }
//     return <PostViewerBlock>오류 발생!</PostViewerBlock>;
//   }

//   // 로딩중이거나, 아직 포스트 데이터가 없을 시
//   if (loading || !post) {
//     return null;
//   }

//   const { title, body, user, publishedDate, tags } = post;
//   return (
//     <PostViewerBlock>
//       <Helmet>
//         <title>{title} - REACTERS</title>
//       </Helmet>

//       <PostHead>
//         <h1>{title}</h1>
//         <SubInfo
//           username={user.username}
//           publishedDate={publishedDate}
//           hasMarginTop
//         />
//         <Tags tags={tags} />
//       </PostHead>
//       {actionButtons}
//       <PostContent dangerouslySetInnerHTML={{ __html: body }} />
//     </PostViewerBlock>
//   );
// };
const PostViewer = ({ post, error, loading }) => {
  // 로딩중이거나, 아직 포스트 데이터가 없을 시
  if (loading || !post) {
    return null;
  }
  const { title, body, user, publishedDate, tags } = post;

  return (
    <PostViewerBlock>
      <PostHead>
        <h3>{title}</h3>
        <SubInfo
          username={user.username}
          publishedDate={publishedDate}
        ></SubInfo>
        <Tags tags={tags}></Tags>
      </PostHead>
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerBlock>
  );
};

export default PostViewer;
