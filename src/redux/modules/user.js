import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { deleteCookie, setCookie } from "../../shared/Cookie";
import { apis } from "../../shared/api";

// action
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

// action creator
const Login = createAction(LOGIN, (user) => ({ user }));
const logOut = createAction(LOGOUT, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// Thunk function
const setLoginDB = (userlogin) => {
  return function (dispatch, getState, { history }) {
    apis
      .login(userlogin)
      .then((res) => {
        setCookie("token", res.data[0].token);
        localStorage.setItem("role", res.data[1].role);
        history.replace("/");
      })
      .catch((err) => {
        window.alert("아이디와 비밀번호를 입력해주세요.");
      });
  };
};

const registerDB = (id, nick, pw, is_artist) => {
  return function (dispatch, getState, { history }) {
    apis
      .signup(id, nick, pw, is_artist)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        window.alert("이미 존재하는 닉네임이거나 아이디입니다.");
      });
  };
};

const logOutDB = () => {
  return function (dispatch, getState, { history }) {
    deleteCookie("token");
    localStorage.removeItem("username");
    dispatch(logOut());
    history.push("/login");
  };
};

const loginCheck = () => {
  return function (dispatch, getState, { history }) {
    const userId = localStorage.getItem("username");
    const tokenCheck = document.cookie;
    if (tokenCheck) {
      dispatch(Login({ id: userId }));
    } else {
      dispatch(logOutDB());
    }
  };
};

// reducer
export default handleActions(
  {
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOGOUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const userCreators = {
  setLoginDB,
  registerDB,
  logOutDB,
  loginCheck,
  Login,
};

export { userCreators };
