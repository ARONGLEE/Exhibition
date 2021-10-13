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
    // 재환: 3x3 정렬을 위한 그리드
    grid,
    justifyContent,
  } = props;

  const styles = {
    flex: flex,
    width: width,
    padding: padding,
    margin: margin,
    background: background,
    center: center,
    border: border,
    // 재환: 3x3 정렬을 위한 그리드
    grid: grid,
    justifyContent: justifyContent,
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
  justifyContent: false,
  _onClick: () => {},
  // 재환: 3x3 정렬을 위한 그리드 설정
  grid: false,
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
      ? `display:flex; place-items: center; align-items: center; justify-content: center;`
      : ""}
    ${(props) => (props.center ? `text-align: center` : "")}
    // 재환: 3x3 정렬을 위한 기본 값 설정
    ${(props) =>
    props.grid
      ? `display:grid; 
        grid-gap: 4px; 
        grid-template-columns: repeat(3, minmax(auto, 1fr));
        align-items: center; 
        justify-content: space-around;`
      : ""}
    ${(props) => (props.justifyContent ? `justify-content: left` : "")}
`;

export default Grid;
