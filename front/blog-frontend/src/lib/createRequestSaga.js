import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type)); // 로딩 시작
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}
// import { call, put } from 'redux-saga/effects';
// import { startLoading, finishLoading } from '../modules/loading';

// export const createRequestActionTypes = (type) => {
//   const SUCCESS = `${type}_SUCCESS`;
//   const FAILURE = `${type}_FAILURE`;
//   return [type, SUCCESS, FAILURE];
// };

// export default function createRequestSaga(type, request) {
//   const SUCCESS = `${type}_SUCCESS`;
//   const FAILURE = `${type}_FAILURE`;

//   return function* (action) {
//     yield put(startLoading(type)); // 로딩 시작
//     try {
//       const response = yield call(request, action.payload);
//       yield put({
//         type: SUCCESS,
//         payload: response, // Spring에서 반환한 응답을 그대로 사용
//       });
//     } catch (e) {
//       yield put({
//         type: FAILURE,
//         payload: e,
//         error: true,
//       });
//     }
//     yield put(finishLoading(type)); // 로딩 끝
//   };
// }
