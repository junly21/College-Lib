import client from './client';

// 로그인
export const login = ({ loginId, password, username }) =>
  client.post('/api/auth/login', { loginId, password, username });

// 회원가입
export const register = ({ loginId, password, username }) =>
  client.post('/api/auth/register', { loginId, password, username });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

//로그아웃
export const logout = () => client.post('api/auth/logout');
