import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonContainer from '../containers/write/WriteActionButtonContainer';

const WritePage = () => {
  return (
    <Responsive>
      {/* <Editor /> */}
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonContainer />
    </Responsive>
  );
};

export default WritePage;
