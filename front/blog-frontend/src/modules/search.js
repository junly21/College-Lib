import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as searchAPI from '../lib/api/search';

const [LIST_SEARCH, LIST_SEARCH_SUCCESS, LIST_SEARCH_FAILURE] =
  createRequestActionTypes('search/LIST_SEARCH'); //포스트 목록 성공 실패 상태

export const listSearch = createAction(LIST_SEARCH, (keyword) => ({
  keyword,
}));

const searchListSaga = createRequestSaga(LIST_SEARCH, searchAPI.listSearch);

export function* searchSaga() {
  //console.log('searchSaga시작');
  yield takeLatest(LIST_SEARCH, searchListSaga);
}

const initialState = {
  //검색목록 모듈
  books: null,
  error: null,
};
//list는 배열이고 bookId, bookTitle, authorname, 등등

const search = handleActions(
  {
    [LIST_SEARCH_SUCCESS]: (state, { payload: books, meta: response }) => ({
      ...state,
      books,
      error: null,
      //lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    [LIST_SEARCH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default search;
