import client from './client';

//modules/write.js
export const writePost = ({ title, body, tags }) =>
  client.post('/2/write', { title, body, tags }); //백엔드로 이렇게 세개의 json이 간다. tag를 삽니다 팝니다 q&a로 하는게 좋을듯 함.
//bookId/write로 쓰기 요청 보내고 응답 받음

//modules/post.js
export const readPost = (id) => client.get(`/2/${id}`); //BookId/postId로 리다이렉트 해서 글 정보 받음

export const listPosts = (bookId, tag) => {
  return client.get(`/${bookId}/${tag}`);
};
//최종 코드는 이렇게.
// export const listPosts = (bookId, tags) => {
//   return client.get(`/${bookId}/${tags}`);
// };

// export const listPosts = (tags) => {
//   return client.get(`/2/${tags}`);
// };

export const removePost = (id) => client.delete(`/2/${id}`);
