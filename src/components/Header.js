// 승민 수정사항

import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router";
import { Grid, Text, Button } from "../elements";

import { userCreators } from "../redux/modules/user";

import { useSelector, useDispatch } from "react-redux";

import { GrLogin, GrLogout } from "react-icons/gr";
import { BiUserCircle } from "react-icons/bi";

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
          <div style={{ margin: "0px 10px", paddingTop: "2px" }}>
            <BiUserCircle
              onClick={() => {
                history.push("/artist");
              }}
              cursor="pointer"
            />
          </div>
          <GrLogout
            onClick={() => {
              dispatch(userCreators.logOutDB());
            }}
            cursor="pointer"
          ></GrLogout>
        </Grid>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid flex padding="20px 46px">
          <Grid>
            <Text margin="0px" size="32px" color="black" bold>
              ARTIST
            </Text>
          </Grid>
          <GrLogin
            onClick={() => {
              history.push("/login");
            }}
            cursor="pointer"
          />
        </Grid>
      </React.Fragment>
    );
  }
};

Header.defaultProps = {};

export default Header;
