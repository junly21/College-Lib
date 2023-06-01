//import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/Subinfo';
import { Link } from 'react-router-dom';

const PostListBlock = styled(Responsive)`
  margin-top: 2rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const PostItemBlock = styled.div`
  border-top: 1px solid ${palette.red[1]};
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

const Title = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
`;

const TagsBlock = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.gray[5]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: ${palette.cyan[6]};
    }
  }
`;

const Tags = ({ tags }) => {
  return (
    <TagsBlock>
      <span className="tag">#{tags}</span>
    </TagsBlock>
  );
};

const PostItem = ({ post }) => {
  const { date, username, tags, title, body, id } = post;
  return (
    <PostItemBlock>
      <Link to={`/2/${id}`}>
        <Title>{title}</Title>
      </Link>
      <SubInfo username={username} publishedDate={new Date(date)} />
      <Tags tags={tags} />
      <p>{body}</p>
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <Button cyan to="/write">
          새 글 작성하기
        </Button>
      </WritePostButtonWrapper>
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;
