import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as searchAPI from '../lib/api/comments';

const [LIST_COMMENTS, LIST_COMMENTS_SUCCESS, LIST_COMMENTS_FAILURE] =
  createRequestActionTypes('comments/LIST_COMMENTS'); //포스트 목록 성공 실패 상태

export const listComments = createAction(
  LIST_COMMENTS,
  ({ bookId, postId }) => ({
    bookId,
    postId,
  }),
);

const commentsListSaga = createRequestSaga(
  LIST_COMMENTS,
  searchAPI.listComments,
);

export function* commentsSaga() {
  //console.log('searchSaga시작');
  yield takeLatest(LIST_COMMENTS, commentsListSaga);
}

const initialState = {
  //검색목록 모듈
  comments: null,
  error: null,
};
//list는 배열이고 bookId, bookTitle, authorname, 등등

const comments = handleActions(
  {
    [LIST_COMMENTS_SUCCESS]: (
      state,
      { payload: comments, meta: response },
    ) => ({
      ...state,
      comments,
      error: null,
      //lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    [LIST_COMMENTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default comments;
