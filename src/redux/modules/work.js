import { createAction, handleActions } from "redux-actions";
import { produce } from "immer"; // reducer 불변성 유지
import { apis } from "../../shared/api";
import axios from "axios"; //추가
import { actionCreators as imageActions } from "./image"; //추가

//action
const SET_WORK = "SET_WORK";
//const LOAD_ONE = "LOAD_ONE";
const ADD_WORK = "ADD_WORK";

// action creators
const setWork = createAction(SET_WORK, (work_list) => ({ work_list }));
//const loadOne = createAction(LOAD_ONE, (id) => ({ id }));
const addWork = createAction(ADD_WORK, (work) => ({ work }));

// middleware thunk 연결
// reducer 가 사용할 initialState
const initialState = {
  list: [],
};

//작품 하나에 대한 default 값
const initialWork = {
  id: 0,
  image:
    "https://mblogthumb-phinf.pstatic.net/20160316_188/machsz_1458108041064UOBNl_JPEG/22.jpg?type=w2",
  workTitle: "Lorem",
  workDesc: "lorem ipsum dolor sit amet consectetur adipiscing elit",
  workSize: "160 * 160cm",
  workMaterial: "mixed media",
  workMade: "2021",
};

//middleware
const getWorkMiddleware = () => {
  return (dispatch, getState, { history }) => {
    apis.getWork().then((res) => {
      window.alert(res.data);
      console.log(res.data);
      const work_list = res.data;
      dispatch(setWork(work_list));
    });
    // .catch((err) => {
    //   console.error(err);
    // });
  };
};

//게시글 상세페이지 (추가)
// const getOneWorkDB = (id) => {
//   async (dispatch, getState, {history}) => {
//     try{
//       const{data}  = await apis.work(id);
//       dispatch(getOne)
//     }
//   }
// }

//게시글 작성 (추가)
const addWorkDB = (content) => {
  return function (dispatch, getState, { history }) {
    window.alert(content);
    apis
      .createWork(content)
      .then((res) => {
        dispatch(addWork(content));
        console.log(res.data);
        history.goBack();
        dispatch(imageActions.setPreview(null));
      })
      .catch((err) => {
        console.log(err);
        window.alert(content);
      });
  };
};

//reducer
export default handleActions(
  {
    // immer를 이용한 불변성 유지! - produce 사용
    [SET_WORK]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.work_list;
      }),

    [ADD_WORK]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.post);
      }),
  },
  initialState
);

const actionCreators = {
  setWork,
  addWork,
  getWorkMiddleware,
  addWorkDB,
};

export { actionCreators };
