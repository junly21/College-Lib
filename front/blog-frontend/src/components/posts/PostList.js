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
  justify-content: space-between;
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

const PostItem = ({ post, bookId }) => {
  const { date, username, tags, title, body, id } = post;
  return (
    <PostItemBlock>
      <Link to={`/${bookId}/${id}`}>
        <Title>{title}</Title>
      </Link>
      <SubInfo username={username} publishedDate={new Date(date)} />
      <Tags tags={tags} />
      <p>{body}</p>
    </PostItemBlock>
  );
};

const PostList = ({ posts, loading, error, bookId, tag }) => {
  let button1Text;
  let button1Link;
  let button2Text;
  let button2Link;

  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }

  if (tag === 'buy') {
    button1Text = '판매 게시판';
    button1Link = `/${bookId}/board/sell`;
    button2Text = '질문과 답변 게시판';
    button2Link = `/${bookId}/board/qa`;
  } else if (tag === 'sell') {
    button1Text = '구매 게시판';
    button1Link = `/${bookId}/board/buy`;
    button2Text = '질문과 답변 게시판';
    button2Link = `/${bookId}/board/qa`;
  } else {
    button1Text = '구매 게시판';
    button1Link = `/${bookId}/board/buy`;
    button2Text = '판매 게시판';
    button2Link = `/${bookId}/board/sell`;
  }

  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <Button to={`/info/${bookId}/`}>책 정보로 돌아가기 </Button>
        <div>
          <Button to={button1Link}>{button1Text}</Button>
          <Button to={button2Link}>{button2Text}</Button>
        </div>
        <Button cyan to={`/${bookId}/write`}>
          새 글 작성하기
        </Button>
      </WritePostButtonWrapper>
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post.id} bookId={bookId} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;
