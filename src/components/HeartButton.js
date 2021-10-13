import React from "react";
import styled from "styled-components";

import e_heart from "../shared/heart_gray.png";

const HeartButton = (props) => {
  return (
    <React.Fragment>
      <Heart icon_url={e_heart}></Heart>
    </React.Fragment>
  );
};

const Heart = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  background: url(${(props) => props.icon_url});
  background-size: cover;
  cursor: pointer;
  margin: auto;
`;
export default HeartButton;
