import React from "react";
import styled from "styled-components";

import { Grid, Text, Input, Button } from "../elements/index";

// Login의 함수형 컴포넌트입니다.
const Login = (props) => {
  return (
    <React.Fragment>
      <Grid
        border="1px solid #DCDCDC"
        width="350px"
        margin="120px auto"
        padding="20px"
      >
        {/* 메인 Text */}
        <Grid center>
          <Text size="32px" bold>
            ARTIST
          </Text>
        </Grid>

        {/* 아이디 */}
        <Grid center margin="30px 0">
          <Input placeholder="아이디를 입력해주세요." />
        </Grid>

        {/* 비밀번호 */}
        <Grid center margin="30px 0">
          <Input placeholder="비밀번호를 입력해주세요." type="password" />
        </Grid>

        {/* 로그인 */}
        <Grid flex>
          <Button width="300px" padding="12px 4px" margin="4px">
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
          <Text color="#DCDCDC" size="15px">
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
