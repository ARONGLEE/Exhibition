import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button } from "../elements/index";

import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { userCreators } from "../redux/modules/user";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [category, setCategory] = useState("");

  const handleRadioChange = (e) => {
    setCategory(e.target.value);
  };

  const login = () => {
    dispatch(userCreators.setLoginDB(id, pw, category));
  };

  return (
    <React.Fragment>
      <Grid
        border="1px solid #DCDCDC"
        width="350px"
        margin="60px auto"
        padding="20px"
        center
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

        {/* 아이디 */}
        <Grid center margin="30px 0">
          <Input
            placeholder="아이디를 입력해주세요."
            padding="16px 14px"
            width="300px"
            _onChange={(e) => setId(e.target.value)}
          />
        </Grid>

        {/* 비밀번호 */}
        <Grid center margin="30px 0">
          <Input
            placeholder="비밀번호를 입력해주세요."
            type="password"
            padding="16px 14px"
            width="300px"
            _onChange={(e) => setPw(e.target.value)}
          />
        </Grid>

        {/* 로그인 */}
        <Grid flex>
          <Button
            width="300px"
            padding="12px 4px"
            margin="4px"
            _onClick={login}
          >
            로그인
          </Button>
        </Grid>

        {/* 카카오 로그인 */}
        <Grid flex>
          <KakaoButton background="black" width="300px" padding="12px 4px">
            Login with Kakao
          </KakaoButton>
        </Grid>

        {/* 회원가입 Text & 버튼 */}
        <Grid flex>
          <Text color="#DCDCDC" size="15px" margin="16px auto">
            아직 회원이 아니라면?
            <button
              style={{
                background: "white",
                border: "none",
                color: "grey",
                margin: "30px 0",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => {
                props.history.push("/signup");
              }}
            >
              회원가입
            </button>
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const KakaoButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fde135;
  border: none;
  width: 300px;
  font-size: 15px;
  border-radius: 4px;
  margin: auto;
  margin-top: 10px;
  padding: 12px 4px;
  cursor: pointer;
`;

export default Login;
