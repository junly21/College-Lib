import client from './client';

export const readBookInfo = (bookId) => {
  //console.log('api부분에 book id전달 확인', id);
  //이거 id를 bookId로 바꿔도 되나 해보기
  return client.get(`/info/${bookId}`);
};
