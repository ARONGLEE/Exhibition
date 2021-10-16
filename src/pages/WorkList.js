import React from "react";
import { useSelector, useDispatch } from "react-redux"; // post redux를 WorkList 페이지에서 불러오기 위해 useSelector import
import { history } from "../redux/configureStore";

import Header from "../components/Header";
import Work from "../components/Work";
import { actionCreators as workActions } from "../redux/modules/work";
import { Grid, Button } from "../elements";

const WorkList = (props) => {
  const dispatch = useDispatch();
  const work_list = useSelector((state) => state.work.list); // useSelector 써서 work_list 가져오기 - state.work.list(initialState 를 list로 설정)
  const is_login = document.cookie;

  React.useEffect(() => {
    dispatch(workActions.getWorkMiddleware());
  }, []);
  if (is_login) {
    return (
      <React.Fragment>
        <Header />
        <Grid>
          <Grid grid>
            {work_list.map((w, idx) => {
              // work_list.map - map을 이용해서 갯수만큼 work를 불러온다.
              // work 하나를 w라고 한다.
              return (
                //아영 - 상세페이지 클릭을 위해 Grid 태그추가
                <Grid
                  _onClick={() => {
                    history.push(`/detail/${w.id}`);
                  }}
                >
                  <Work {...w} />
                </Grid>
              );
              // ...w 스프레드 문법으로 w = work에 대한 모든 정보를 props로 다 넘겨준다.
              // map을 이용하기 위해서는 key를 꼭 써줘야한다.
            })}
          </Grid>
        </Grid>
        <Button
          is_float
          text="+"
          _onClick={() => {
            history.push("/insert");
          }}
        ></Button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Header />
        <Grid>
          <Grid grid>
            {work_list.map((w, idx) => {
              // work_list.map - map을 이용해서 갯수만큼 work를 불러온다.
              // work 하나를 w라고 한다.
              return (
                //아영 - 상세페이지 클릭을 위해 Grid 태그추가
                <Grid
                  _onClick={() => {
                    history.push(`/detail/${w.id}`);
                  }}
                >
                  <Work {...w} />
                </Grid>
              );
              // ...w 스프레드 문법으로 w = work에 대한 모든 정보를 props로 다 넘겨준다.
              // map을 이용하기 위해서는 key를 꼭 써줘야한다.
            })}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
};

export default WorkList;
