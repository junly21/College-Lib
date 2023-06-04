import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

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

const CommentWriteButtons = () => {
  return (
    <>
      <CommentWriteButtonBlock>
        <CommentWriteButton>등록</CommentWriteButton>
      </CommentWriteButtonBlock>
    </>
  );
};

export default CommentWriteButtons;
