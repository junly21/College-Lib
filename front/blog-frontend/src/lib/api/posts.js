import client from './client';

export const writePost = ({ title, body, tags }) =>
  client.post('/board/buy/3/write', { title, body, tags }); //백엔드로 이렇게 세개의 json이 간다. tag를 삽니다 팝니다 q&a로 하는게 좋을듯 함.
