import React from "react";

import { Grid, Text, Input, Button } from "../elements";

const Signup = (props) => {
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

        <input type="checkbox" />
        <input type="checkbox" />

        {/* 아이디 */}
        <Grid center margin="30px 0">
          <Input placeholder="아이디를 입력하시오." />
        </Grid>

        {/* 닉네임 */}
        <Grid center margin="30px 0">
          <Input placeholder="닉네임을 입력하시오." />
        </Grid>

        {/* 비밀번호 */}
        <Grid center margin="30px 0">
          <Input placeholder="비밀번호를 입력해주세요." />
        </Grid>

        {/* 비밀번호 재입력*/}
        <Grid center margin="30px 0">
          <Input placeholder="비밀번호를 재입력해주세요." type="password" />
        </Grid>

        {/* 로그인 */}
        <Grid flex>
          <Button width="300px" padding="12px 4px" margin="4px">
            로그인
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;
