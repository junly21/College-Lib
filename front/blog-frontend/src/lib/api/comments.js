import client from './client';

// 로그인
export const listComments = (bookId, postId) => {
  // console.log('api부분에 전달 확인', keyword);
  return client.get(`/${bookId}/${postId}/comments`);
};

export const removeComments = ({ bookId, postId, id }) =>
  client.delete(`/${bookId}/${postId}/${id}`);
