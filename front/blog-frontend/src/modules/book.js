import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as bookAPI from '../lib/api/book';
import { takeLatest } from 'redux-saga/effects';

const [READ_INFO, READ_INFO_SUCCESS, READ_INFO_FAILURE] =
  createRequestActionTypes('book/READ_INFO');
const UNLOAD_INFO = 'book/UNLOAD_INFO'; // 포스트 페이지에서 벗어날 때 데이터 비우기

export const readBookInfo = createAction(READ_INFO, (id) => id);
export const unloadBookInfo = createAction(UNLOAD_INFO);

const readBookInfoSaga = createRequestSaga(READ_INFO, bookAPI.readBookInfo);

export function* bookInfoSaga() {
  yield takeLatest(READ_INFO, readBookInfoSaga);
}

const initialState = {
  book: null,
  error: null,
};

const book = handleActions(
  {
    [READ_INFO_SUCCESS]: (state, { payload: book }) => ({
      ...state,
      book,
    }),
    [READ_INFO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_INFO]: () => initialState,
  },
  initialState,
);

export default book;
