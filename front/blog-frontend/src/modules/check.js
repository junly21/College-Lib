import { call, put, takeEvery } from 'redux-saga/effects';
import { check } from '../lib/api/auth';

const checkSuccess = (data) => {
  return {
    type: 'CHECK_SUCCESS',
    payload: data,
  };
};

const checkFailure = (error) => {
  return {
    type: 'CHECK_FAILURE',
    payload: error,
  };
};

export const checkRequest = () => {
  return {
    type: 'CHECK_REQUEST',
  };
};

function* checkSaga() {
  try {
    const response = yield call(check); // 비동기 작업 수행
    // 작업을 성공적으로 완료한 후 결과에 따라 액션 디스패치 등을 처리합니다.
    yield put(checkSuccess(response.data));
  } catch (error) {
    yield put(checkFailure(error.message));
  }
}

function* watchCheck() {
  yield takeEvery('CHECK_REQUEST', checkSaga);
}

export default check;
