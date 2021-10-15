// 승민 수정사항

import React, { useState } from "react";
import { Grid, Text, Input, Button } from "../elements";

import { useDispatch } from "react-redux";
import { userCreators } from "../redux/modules/user";

const Signup = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [pw, setPw] = React.useState("");
  const [nick, setNick] = React.useState("");
  const [category, setCategory] = React.useState("user");
  const [pwcheck, setPwcheck] = React.useState("");

  const handleRadioChange = (e) => {
    setCategory(e.target.value);
  };

  const signup = () => {
    if (nick === "" || id === "" || pw === "") {
      window.alert("닉네임 , 아이디 , 비밀번호 입력하시오.");
      return;
    }

    if (pw !== pwcheck) {
      window.alert("비밀번호를 다시 확인해 주세요.");
      return;
    }

    dispatch(userCreators.registerDB(id, pw, nick, category));
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
          <label htmlFor="category">
            <input
              type="radio"
              id="user"
              name="user"
              value="user"
              checked={category === "user"}
              onChange={handleRadioChange}
            ></input>
            유저
          </label>

          <label htmlFor="category">
            <input
              type="radio"
              id="artist"
              name="artist"
              value="artist"
              checked={category === "artist"}
              onChange={handleRadioChange}
            ></input>
            작가
          </label>
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
              setPwcheck(e.target.value);
            }}
          />
        </Grid>

        {/* 회원가입 */}
        <Grid flex>
          <Button
            width="300px"
            padding="12px 4px"
            margin="4px"
            _onClick={() => {
              signup();
            }}
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
