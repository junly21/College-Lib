import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const BookViewerBlock = styled(Responsive)`
  border: 1px solid ${palette.red[1]};
  margin: 4rem;
  padding-bottom: 1rem;
`;
const BookHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};

  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const SubInfo = styled.div`
  // border: 1px solid ${palette.red[1]};
  color: ${palette.gray[6]};

  span+span: before {
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;

const Tags = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.red[1]};
    text-decoration: none;
    margin-right: 0.5rem;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
  margin-bottom: 3rem;
`;

const BookImage = styled.img`
  width: 300px;
  height: 400px;
  margin-bottom: 1rem;
`;

const BookInfo = ({ book, loading, error }) => {
  const navigate = useNavigate();
  const goPostlist = () => {
    navigate('/2/buy');
  };

  if (loading || !book) {
    return null;
  }

  const { id, name, authorName } = book;
  console.log('Bookinfo: ', id);
  return (
    <BookViewerBlock>
      <BookHead>
        <h3>{name}</h3>
        <SubInfo>
          <b>{authorName}</b>
        </SubInfo>
      </BookHead>
      <div className="c1image">
        <BookImage src="/img/imageEx.jpeg" />
      </div>
      <Button onClick={goPostlist}>삽니다</Button>
      <Button onClick={goPostlist}>팝니다</Button>
      <Button onClick={goPostlist}>질문</Button>
    </BookViewerBlock>
  );
};

export default BookInfo;
