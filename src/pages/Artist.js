import React from "react";
import { useSelector, useDispatch } from "react-redux"; // 변경
import { actionCreators as workActions } from "../redux/modules/work"; // 변경

import Header from "../components/Header";
import Profile from "../components/Profile";
import Work from "../components/Work";

import { Grid, Button } from "../elements";
import { history } from "../redux/configureStore";

const Artist = (props) => {
  const dispatch = useDispatch(); // 변경
  const work_list = useSelector((state) => state.work.list); // useSelector 써서 work_list 가져오기 - state.work.list(initialState 를 list로 설정) // 변경

  React.useEffect(() => {
    // 변경
    dispatch(workActions.getWorkMiddleware()); // 변경
  }, []); // 변경
  const is_login = document.cookie;
  if (is_login) {
    return (
      <React.Fragment>
        <Header />
        <Grid margin="20px">
          <Profile />
        </Grid>
        <Grid>
          <Grid grid>
            {work_list.map((w, idx) => {
              // work_list.map - map을 이용해서 갯수만큼 work를 불러온다.
              // work 하나를 w라고 한다.
              return (
                <Grid
                  _onClick={() => {
                    history.push(`/detail/${w.id}`);
                  }}
                >
                  <Work key={w.id} {...w} />
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
        <Grid margin="20px">
          <Profile />
        </Grid>
        <Grid>
          <Grid grid>
            {work_list.map((w, idx) => {
              // work_list.map - map을 이용해서 갯수만큼 work를 불러온다.
              // work 하나를 w라고 한다.
              return (
                <Grid
                  _onClick={() => {
                    history.push(`/detail/${w.id}`);
                  }}
                >
                  <Work key={w.id} {...w} />
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

export default Artist;
