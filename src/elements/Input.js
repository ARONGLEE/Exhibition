import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";

// Input의 함수형 컴포넌트입니다.
const Input = (props) => {
  const {
    label,
    placeholder,
    // 아영- 게시글쓰기 input창 여백 때문에 margin 추가
    margin,
    type,
    onSubmit,
    _onChange,
    children,
  } = props;

  const styles = {
    label: label,
    placeholder: placeholder,
    type: type,
    // 아영- 게시글쓰기 input창 여백 때문에 margin 추가
    margin: margin,
  };

  return (
    <React.Fragment>
      <Grid>
        <ElementInput
          {...styles}
          //아영 - input태그 onChange 추가
          onChange={_onChange}
          type={type}
        >
          {children}
        </ElementInput>
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  onSubmit: () => {},
  _onChange: () => {},
  // 아영- 게시글쓰기 input창 여백 때문에 margin 추가
  margin: false,
};

const ElementTextarea = styled.textarea`
  box-sizing: border-box;
  width: 300px;
  padding: 12px 4px;
  border: 1px solid #dcdcdc;
`;

const ElementInput = styled.input`
  box-sizing: border-box;
  width: 300px;
  padding: 16px 4px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  // 아영- 게시글쓰기 input창 여백 때문에 margin 추가
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Input;
