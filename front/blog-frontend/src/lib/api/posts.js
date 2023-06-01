import client from './client';

//modules/write.js
export const writePost = ({ title, body, tags }) =>
  client.post('/2/write', { title, body, tags }); //백엔드로 이렇게 세개의 json이 간다. tag를 삽니다 팝니다 q&a로 하는게 좋을듯 함.
//bookId/write로 쓰기 요청 보내고 응답 받음

//modules/post.js
export const readPost = (id) => client.get(`/2/${id}`); //BookId/postId로 리다이렉트 해서 글 정보 받음

//포스트 목록 관련. modules/posts.js
export const listPosts = ({ page, user, tag }) => {
  //BookId/tag로 삽니다/팝니다/질문 태그 게시글들 받아올거임. 일단 전부다.
  return client.get('/2/buy', {
    params: { page, user, tag }, //여기서 뺄 건 빼야함.
  }); //일단 bookId/buy로 책에 대한 삽니다 목록만 받아와보자.
};
//이렇게 param넣어주면 /2/buy?username=예시이름&page=2이런식으로 주소 만들어서 호출
