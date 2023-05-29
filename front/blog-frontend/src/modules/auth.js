import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest, call } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes('auth/REGISTER');

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('auth/LOGIN');

const LOGOUT = 'user/LOGOUT';
export const logout = createAction(LOGOUT);

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register , login
    key, // username, password, passwordConfirm
    value, // 실제 바꾸려는 값
  }),
); //첫번째 인자는 함수(타입 액션), 두번재 인자는 초기값

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form); // register / login

export const register = createAction(
  REGISTER,
  ({ loginId, password, username }) => ({
    loginId,
    password,
    username,
  }),
);
export const login = createAction(LOGIN, ({ loginId, password, username }) => ({
  loginId,
  password,
}));

// saga 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

function* logoutSaga() {
  try {
    yield call(authAPI.logout);
  } catch (e) {
    console.log(e);
  }
}

///유저정보 랑 체크
const TEMP_SET_USER = 'user/TEMP_SET_USER';
const CHECK = 'user/CHECK';

export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);

const initialState = {
  register: {
    loginId: '',
    password: '',
    passwordConfirm: '',
    username: '',
  },
  login: {
    loginId: '',
    password: '',
  },
  auth: null,
  check: null,
  authError: null,
  user: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    // 회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: check }) => ({
      ...state,
      authError: null,
      check,
    }),
    // 회원가입 실패
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      check: null,
      authError: error,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      auth: null,
      authError: null,
    }),
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user, // 사용자 정보 설정
    }),

    [CHECK]: (state) => state, // check 액션이 디스패치되었을 때는 상태 그대로 유지
  },
  initialState,
);

export default auth;
