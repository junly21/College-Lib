import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts'; //posts목록 조회 api사용
import { takeLatest, select, call } from 'redux-saga/effects';

const [LIST_POSTS, LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE] =
  createRequestActionTypes('posts/LIST_POSTS'); //포스트 목록 성공 실패 상태

export const listPosts = createAction(LIST_POSTS);

const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);

// export function* postsSaga() {
//   yield takeLatest(LIST_POSTS, listPostsSaga);
// }
export function* postsSaga() {
  yield takeLatest(LIST_POSTS, function* (action) {
    const { bookId, tag } = action.payload; // listPosts 액션의 payload로부터 bookId와 tag를 추출
    const searchParams = yield select((state) => state.router.location.search); // 현재 주소의 쿼리 파라미터를 가져옴
    yield call(listPostsSaga, { payload: { bookId, tag, searchParams } }); // 수정된 정보를 가지고 listPostsSaga 호출
  });
}

const initialState = {
  //리스트 목록의 초기설정.
  posts: null,
  error: null,
  //lastPage: 1,
};

const posts = handleActions(
  {
    [LIST_POSTS_SUCCESS]: (state, { payload: posts, meta: response }) => ({
      ...state,
      posts,
      //lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default posts;
