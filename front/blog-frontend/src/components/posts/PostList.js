//import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/Subinfo';
import Tags from '../common/Tags';
import { Link } from 'react-router-dom';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  border-bottom: 1px solid ${palette.gray[4]};
  padding-top: 1rem;
  padding-bottom: 1rem;
  /* 맨 위 포스트는 padding-top 없음 */

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

// const PostItem = ({ post }) => {
//   const { publishedDate, user, tags, title, body, _id } = post;

//   return (
//     <PostItemBlock>
//       <h2>
//         <Link to={`/@${user.username}/${_id}`}>{title}</Link>
//       </h2>
//       <SubInfo
//         username={user.username}
//         publishedDate={new Date(publishedDate)}
//       />
//       <Tags tags={tags} />
//       <p>{body}</p>
//     </PostItemBlock>
//   );
// };

const PostItem = () => {
  return (
    <PostItemBlock>
      <h3>제목</h3>
      <SubInfo username={'usernametest'} publishedDate={new Date()}></SubInfo>
      {/* <Tags tags={'태그예시'} />  태그는 url로 구분할거니까 제외요*/}
      <p> 포스트 내용 일부분 예시 </p>
    </PostItemBlock>
  );
};

// const PostList = ({ posts, loading, error, showWriteButton }) => {
//   // 에러 발생 시
//   if (error) {
//     return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
//   }

//   return (
//     <PostListBlock>
//       <WritePostButtonWrapper>
//         {showWriteButton && (
//           <Button cyan to="/write">
//             새 글 작성하기
//           </Button>
//         )}
//       </WritePostButtonWrapper>
//       {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
//       {!loading && posts && (
//         <div>
//           {posts.map((post) => (
//             <PostItem post={post} key={post._id} />
//           ))}
//         </div>
//       )}
//     </PostListBlock>
//   );
// };

// export default PostList;

const PostList = () => {
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <Button cyan to="/write">
          새 글 작성하기
        </Button>
      </WritePostButtonWrapper>
      <div>
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </PostListBlock>
  );
};

export default PostList;
