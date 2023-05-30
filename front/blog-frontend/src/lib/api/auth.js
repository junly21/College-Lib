import client from './client';



// 로그인
export const login = ({ loginId, password }) =>
  client.post('/login', { loginId, password });

// 회원가입
export const register = ({ loginId, password, username }) =>
  client.post('/register', { loginId, password, username });

// 로그인 상태 확인
export const check = () => client.get('/check');

//로그아웃
export const logout = () => client.post('/logout');
