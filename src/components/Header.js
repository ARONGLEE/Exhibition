import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router";
import { Grid, Text, Button } from "../elements";

import { useSelector, useDispatch } from "react-redux";

const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);

  // 만약 is_login이 true일때만 리턴해준다.
  //if (is_login && is_login) {
  // 로그인을 한 상태의 Header를 만들어 준다.
  return (
    <React.Fragment>
      <Grid flex padding="20px 46px">
        {/* <Grid>
          <ToggleButton>
            <i className="fas fa-bars"></i>
          </ToggleButton>
        </Grid> */}

        <Grid>
          <Text margin="0px" size="32px" color="#46de99" bold>
            ARTIST
          </Text>
        </Grid>

        <UserButton
          onClick={() => {
            history.push("/signup");
          }}
        >
          <i className="fas fa-user"></i>
        </UserButton>
      </Grid>
    </React.Fragment>
  );
  // }

  return (
    <React.Fragment>
      <Grid flex>
        <Grid center margin="20px auto">
          <Text margin="0px" size="32px" bold>
            ARTIST PROFILE
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const UserButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: gray;
`;

// props가 없어서 오류가 난다던가 아니면 화면이 없어서 깨져버리는 일이 없다.
// 첫째, defaultProps를 설정한다.
Header.defaultProps = {};

// export를 통해 밖에서도 사용할 수 있도록 설정해 둔다.
export default Header;
