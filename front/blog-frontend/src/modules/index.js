import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';
import search, { searchSaga } from './search';
import book, { bookInfoSaga } from './book';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  posts,
  search,
  book,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    writeSaga(),
    postSaga(),
    postsSaga(),
    searchSaga(),
    bookInfoSaga(),
  ]);
}

export default rootReducer;
