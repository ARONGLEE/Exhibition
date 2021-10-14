import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";
import { actionCreators as imageActions } from "./image";

// action 생성
const LOAD_WORK = "LOAD_WORK";
const ADD_WORK = "ADD_WORK";

// action creators
const loadWork = createAction(LOAD_WORK, (list) => ({ list }));
const addWork = createAction(ADD_WORK, (work) => ({ work }));

// initialState
const initialState = {
  list: [],
};

// middleware
const getWorkMiddleware = () => {
  return (dispatch) => {
    apis
      .getPost()
      .then((res) => {
        const work_list = res.data;
        dispatch(loadWork(work_list));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

const addWorkDB = (content) => {
  return function (dispatch, getState, { history }) {
    apis
      .createWork(content)
      .then(() => {
        dispatch(addWork(content));
        //dispatch(imageActions.setPreview(null));
      })
      .then(() => {
        history.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// reducer
export default handleActions(
  {
    [LOAD_WORK]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
    [ADD_WORK]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.post);
      }),
  },
  initialState
);

const actionCreators = {
  getWorkMiddleware,
  addWorkDB,
};

export { actionCreators };
