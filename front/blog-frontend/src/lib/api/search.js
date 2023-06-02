import client from './client';

// 로그인
export const listSearch = (keyword) => {
  // console.log('api부분에 전달 확인', keyword);
  return client.get('/search', { params: keyword });
};
