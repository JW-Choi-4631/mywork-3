import { styled } from "styled-components";

const StyledBtn = styled.button`
  // Fixed : 테두리 둥글기
  border-radius: 8px;
  cursor: pointer;
  // Necessary 1. 너비
  width: ${(props) => {
    if (props.size === "Large") {
      return "fit-content";
    } else if (props.size === "Midium") {
      return "100px";
    } else {
      return "80px";
    }
  }};
  // Necessary 2. 높이
  height: ${(props) => {
    if (props.size === "Large") {
      return "50px";
    } else if (props.size === "Midium") {
      return "40px";
    } else {
      return "30px";
    }
  }};

  // Option 1. 폰트 색깔 : 빨간색 적용이 필요할 때
  color: ${(props) => (props.type === "Negative" ? "red" : "default")};
  // Option 2. 테두리 유무 : 없을 경우만 none
  border: ${(props) => (props.size === "Large" ? "default" : "none")};
  // Option 3. 테두리 색깔 : 색깔 지정 시
  border-color: ${(props) =>
    props.bordercolor !== undefined ? props.bordercolor : "default"};
  // Option 4. 배경 색깔 : 흰색 이외의 색깔 지정 시
  background-color: ${(props) =>
    props.backcolor !== undefined ? props.backcolor : "white"};
`;

export default StyledBtn;
