import React, { useState } from "react";
import styled from "styled-components";
import { Grid } from "../elements/index";

import { useDispatch } from "react-redux";
import { userCreators } from "../redux/modules/user";

const Kakao = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const kakaologin = () => {
    dispatch(userCreators.setLoginDB(id, pw));
  };

  return (
    <React.Fragment>
      {/* 카카오 로그인 */}
      <Grid flex>
        <KakaoButton
          background="black"
          width="300px"
          padding="12px 4px"
          _onClick={kakaologin}
        >
          Login with Kakao
        </KakaoButton>
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

export default Kakao;
