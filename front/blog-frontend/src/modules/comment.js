import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'comment/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'comment/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [WRITE_COMMENT, WRITE_COMMENT_SUCCESS, WRITE_COMMENT_FAILURE] =
  createRequestActionTypes('comment/WRITE_COMMENT'); // 댓글 작성

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writeComment = createAction(WRITE_COMMENT, ({ comment }) => ({
  comment,
}));

const writeCommentSaga = createRequestSaga(
  WRITE_COMMENT,
  postsAPI.writeComment,
);

export function* CommentSaga() {
  yield takeLatest(WRITE_COMMENT, writeCommentSaga);
}

const initialState = {
  comment: '',
};

const comment = handleActions(
  {
    [INITIALIZE]: () => initialState, // initialState를 넣으면 초기상태로 바뀜
    [WRITE_COMMENT]: (state) => ({
      ...state,
      // post와 postError를 초기화
      comment: null,
      COMMENT: null,
    }),
    // 포스트 작성 성공
    [WRITE_COMMENT_SUCCESS]: (state, { payload: comment }) => ({
      ...state,
      comment,
    }),
    // 포스트 작성 실패
    [WRITE_COMMENT_FAILURE]: (state, { payload: commentError }) => ({
      ...state,
      commentError,
    }),
  },
  initialState,
);

export default comment;
