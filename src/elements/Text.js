import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children } = props;

  const styles = { bold: bold, color: color, size: size };
  return <P {...styles}>{children}</P>;
};

Text.dedaultProps = {
  children: null,
  bold: false,
  color: false,
  size: false,
  margin: false,
};

const P = styled.div`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  //아영 - 오타수정
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Text;
