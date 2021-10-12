import React from "react";
import styled from "styled-components";

// Button의 함수형 컴포넌트입니다.
const Button = (props) => {
  const { children, text, width, padding, margin, background, _onClick } =
    props;

  const styles = {
    text: text,
    width: width,
    padding: padding,
    margin: margin,
    background: background,
  };

  return (
    <React.Fragment>
      <ElementButton {...styles} onClick={_onClick}>
        {children}
      </ElementButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  children: null,
  text: false,
  width: false,
  padding: false,
  margin: false,
  background: false,
  _onClick: () => {},
};

// 모든 element button 속성 추가!
const ElementButton = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;
  background: "";
  background-color: #c4c4c4;
  border: none;
  width: "300px";
  border-radius: 4px;
  ${(props) => (props.width ? `width: ${props.width};` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
`;

// + 버튼!
const FixBotton = styled.button`
  box-sizing: border-box;
  position: fixed;
  width: 50px;
  height: 50px;
  font-size: 36px;
  font-size: 600;
  color: #fff;
  background-color: #46de99;
  right: 18px;
  bottom: 50px;
  text-align: center;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  vertical-align: middle;
`;

export default Button;
