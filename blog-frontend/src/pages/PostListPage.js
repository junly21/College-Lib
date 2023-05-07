import Button from '../components/common/Button';
import styled from 'styled-components';
const PostListPage = () => {
  const ButtonWithMarginTop = styled(Button)`
    margin-top: 1rem;
  `;
  return (
    <div>
      <Button>버튼</Button>

      <ButtonWithMarginTop>가나다</ButtonWithMarginTop>
    </div>
  );
};

export default PostListPage;
