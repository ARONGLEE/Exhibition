import React from "react";
import styled from "styled-components";

// Grid의 함수형 컴포넌트입니다.
const Grid = (props) => {
  const {
    flex,
    width,
    padding,
    margin,
    background,
    children,
    center,
    _onClick,
    border,
  } = props;

  const styles = {
    flex: flex,
    width: width,
    padding: padding,
    margin: margin,
    background: background,
    center: center,
    border: border,
  };

  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  flex: false,
  width: "100%",
  padding: false,
  margin: false,
  background: false,
  center: false,
  border: false,
  _onClick: () => {},
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  ${(props) => (props.border ? `border: ${props.border};` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) =>
    props.background ? `background-color: ${props.background};` : ""}
    ${(props) =>
    props.flex
      ? `display:flex; align-items: center; justify-content: center;`
      : ""}
    ${(props) => (props.center ? `text-align: center` : "")}
`;

export default Grid;
