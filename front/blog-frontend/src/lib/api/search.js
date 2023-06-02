import client from './client';

// 로그인
export const listSearch = (keyword) => {
  return client.get(`/search?keyword=${keyword}`);
};
