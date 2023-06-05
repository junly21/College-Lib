//import React from 'react';
import styled, { css } from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SearchListBlock = styled(Responsive)`
  margin-top: 2rem;
`;

const SubInfoBlock = styled.div`
  ${(props) =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: ${palette.gray[6]};

  /* span 사이에 가운뎃점 문자 보여주기*/
  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7'; /* 가운뎃점 문자 */
  }
`;

const SearchItemBlock = styled.div`
  border-top: 1px solid ${palette.red[1]};

  //border: 1px solid ${palette.red[1]};
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

  &:last-child {
    border-bottom: 1px solid ${palette.red[1]};
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

const SubInfo = ({ authorName, hasMarginTop }) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>{authorName}</b>
      </span>
    </SubInfoBlock>
  );
};

const Tags = ({ tags }) => {
  return (
    <TagsBlock>
      <span className="tag">#{tags}</span>
    </TagsBlock>
  );
};

const SearchItem = ({ book }) => {
  const { id, name, authorName } = book; //기타 책 정보들 SearchListContainer에서 props로 줄거임.

  return (
    <SearchItemBlock>
      <Link to={`/info/${id}`}>
        <Title>{name}</Title>
      </Link>
      <SubInfo authorName={authorName} />
    </SearchItemBlock>
  );
};

const SearchList = ({ books, loading, error }) => {
  useEffect(() => {
    if (!loading && books && books.length === 0) {
      // 검색 결과가 없는 경우에만 alert 메시지를 출력
      window.alert('검색 결과가 없습니다.');
    }
  }, [loading, books]);
  if (error) {
    return <SearchListBlock>에러가 발생했습니다.</SearchListBlock>;
  }

  return (
    <SearchListBlock>
      {!loading && books && (
        <div>
          {books.map((book) => (
            <SearchItem book={book} key={book.id} />
          ))}
        </div>
      )}
    </SearchListBlock>
  );
};

export default SearchList;
