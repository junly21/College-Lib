import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonContainer from '../containers/write/WriteActionButtonContainer';
import { useParams } from 'react-router-dom';

const WritePage = () => {
  const { bookId } = useParams();
  console.log('WritePage전달확인', bookId);
  return (
    <Responsive>
      {/* <Editor /> */}
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonContainer bookId={bookId} />
    </Responsive>
  );
};

export default WritePage;
