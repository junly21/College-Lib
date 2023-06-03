import client from './client';

//modules/write.js
export const writePost = ({ title, body, tags, bookId }) => {
  console.log('보낸 bookId:', bookId);
  return client.post(`/${bookId}/write`, { title, body, tags });
}; //백엔드로 이렇게 세개의 json이 간다. tag를 삽니다 팝니다 q&a로 하는게 좋을듯 함.
//bookId/write로 쓰기 요청 보내고 응답 받음

//modules/post.js
export const readPost = ({ bookId, postId }) =>
  client.get(`/${bookId}/${postId}`); //BookId/postId로 리다이렉트 해서 글 정보 받음

// export const listPosts = ({ bookId, tag }) => {
//   console.log('리스트포스트입니다. 보낸 bookId:', bookId, '  보낸 Tag:', tag);
//   // return client.get(`/${bookId.bookId}/${bookId.tag}`);
//   return client.get(`/${bookId.bookId}/${bookId.tag}`);
// };

//콘솔로그 찍으면 안되더라..
export const listPosts = ({ bookId, tag }) => client.get(`/${bookId}/${tag}`);
// export const listPosts = (tags) => {
//   return client.get(`/2/${tags}`);
// };

export const removePost = (id) => client.delete(`/2/${id}`);
