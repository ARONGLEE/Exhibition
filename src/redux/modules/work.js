import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import {apis} from "../../shared/axios";

const SET_WORK = "SET_WORK";
const ADD_WORK = "ADD_WORK";

// action creators
const setWork = createAction(SET_WORK, (work_list) => ({work_list}));
const addWork = createAction(ADD_WORK, (work) => ({work}));

// reducer 가 사용할 initialState
const initialState = {
    list: []
};

// 작품 하나에 대한 default 값
// const initialWork = {
//     image_url: "https://mblogthumb-phinf.pstatic.net/20160316_188/machsz_1458108041064UOBNl_JPEG/22.jpg?type=w2",
//     workTitle: "Lorem",
//     workDesc: "lorem ipsum dolor sit amet consectetur adipiscing elit",
//     workSize: "160 * 160cm",
//     workMetarial: "mixed media",
//     workMade: "2021"
// };

//middleware
const getWorkMiddleware = () => {
  return (dispatch) => {
    apis
      .getWork()
      .then((res) => {
        const work_list = res.data;
        dispatch(setWork(work_list));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

//reducer
export default handleActions(
    {
        [SET_WORK]: (state, action) => produce(state, (draft) => {
            draft.list = action.payload.work_list;
        }),

        [ADD_WORK]: (state, action) => produce(state, (draft) => {

        })
    }, initialState
);

const actionCreators = {
    setWork,
    addWork,
    getWorkMiddleware
}

export {actionCreators};