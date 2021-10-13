import React, { useState } from "react";

import { Grid, Text, Input, Button } from "../elements";

import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import { idCheck, emailCheck, nickCheck } from "../shared/regExp";
import { userCreators } from "../redux/modules/user";

const Signup = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [is_artist, setArtist] = useState("");
  const [nick, setNick] = useState("");

  const signup = () => {
    if (nick === "" || id === "" || pw === "") {
      window.alert("닉네임 , 아이디 , 비밀번호 입력하시오.");
      return;
    }

    const userinfo = {
      username: nick,
      password: pw,
      nickname: id,
      isArtist: is_artist,
    };

    dispatch(userCreators.registerDB(userinfo));
  };

  return (
    <React.Fragment>
      <Grid
        border="1px solid #DCDCDC"
        width="350px"
        margin="60px auto"
        padding="20px"
      >
        {/* 메인 Text */}
        <Grid center>
          <Text size="32px">ARTIST</Text>
        </Grid>

        <Grid center margin="10px 0">
          <input
            type="radio"
            name="check"
            _onChange={(e) => {
              setArtist(e.target.value);
            }}
          />
          <span
            style={{
              padding: "20px",
            }}
          >
            유저
          </span>
          <input
            type="radio"
            name="check"
            _onChange={(e) => {
              setArtist(e.target.value);
            }}
          />
          <span
            style={{
              padding: "20px ",
            }}
          >
            작가
          </span>
        </Grid>

        {/* 닉네임 */}
        <Grid center margin="30px 0" flex>
          <Input
            placeholder="닉네임을 입력하시오."
            padding="16px 14px"
            width="230px"
            _onChange={(e) => {
              setNick(e.target.value);
            }}
          />

          {/* 닉네임 중복확인 */}
          <Button
            width="80px"
            padding="16px 0"
            _onChange={(e) => {
              setNick(e.target.value);
            }}
          >
            중복확인
          </Button>
        </Grid>

        {/* 아이디 */}
        <Grid center margin="30px 0" flex>
          <Input
            placeholder="아이디를 입력하시오."
            padding="16px 14px"
            width="230px"
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
          {/* 아이디 중복확인 */}
          <Button
            width="80px"
            padding="16px 0"
            _onChange={(e) => {
              setId(e.target.value);
            }}
          >
            중복확인
          </Button>
        </Grid>

        {/* 비밀번호 */}
        <Grid center margin="30px 0">
          <Input
            placeholder="비밀번호를 입력해주세요."
            padding="16px 14px"
            width="300px"
            _onChange={(e) => {
              setPw(e.target.value);
            }}
          />
        </Grid>

        {/* 비밀번호 재입력*/}
        <Grid center margin="30px 0">
          <Input
            placeholder="비밀번호를 재입력해주세요."
            type="password"
            padding="16px 14px"
            width="300px"
            _onChange={(e) => {
              setPw(e.target.value);
            }}
          />
        </Grid>

        {/* 회원가입 */}
        <Grid flex>
          <Button
            width="300px"
            padding="12px 4px"
            margin="4px"
            _onClick={signup}
          >
            회원가입
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;
