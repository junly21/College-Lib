import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
//import styled from 'styled-components';

const PostListPage = () => {
  // const ButtonWithMarginTop = styled(Button)`
  //   margin-top: 1rem;
  // `;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div> 미구현 홈페이지</div>
      <Button as={Link} to="/login" style={{ width: '200px', margin: '10px' }}>
        로그인 페이지로 이동
      </Button>
      <Button
        as={Link}
        to="/register"
        style={{ width: '200px', margin: '10px' }}
      >
        회원가입 페이지로 이동
      </Button>
    </div>
  );
};

export default PostListPage;
