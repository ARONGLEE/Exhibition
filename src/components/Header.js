// 승민 수정사항

import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router";
import { Grid, Text, Button } from "../elements";

import { userCreators } from "../redux/modules/user";

import { useSelector, useDispatch } from "react-redux";

const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const is_login = document.cookie;

  if (is_login) {
    return (
      <React.Fragment>
        <Grid flex padding="20px 46px">
          <Grid>
            <Text margin="0px" size="32px" color="black" bold>
              ARTIST
            </Text>
          </Grid>
          <Button
            _onClick={() => {
              dispatch(userCreators.logOutDB());
            }}
          >
            로그아웃
          </Button>
        </Grid>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid flex padding="20px 46px">
          <Grid>
            <Text margin="0px" size="32px" color="#46DE99" bold>
              ARTIST
            </Text>
          </Grid>
          <Button
            _onClick={() => {
              history.push("/login");
            }}
          >
            <i className="fas fa-user"></i>
          </Button>
        </Grid>
      </React.Fragment>
    );
  }
};

Header.defaultProps = {};

export default Header;
