import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import styled from "styled-components";

function App() {
  // state
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: "",
    cost: 0,
  });
  const [selectedValue, setSelectedValue] = useState("리액트");
  const [selectedValue2, setSelectedValue2] = useState("리액트");

  // function
  const openModalHandler = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  const openModalHandler2 = () => {
    !isOpen2 ? setIsOpen2(true) : setIsOpen2(false);
  };

  const closeModalHandler = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const closeModalHandler2 = () => {
    isOpen2 ? setIsOpen2(false) : setIsOpen2(true);
  };

  const BtnClickHandler = (event) => {
    event.currentTarget.name === "Primary"
      ? alert("버튼을 만들어보세요!")
      : window.confirm("어렵나요?");
  };

  const changeInputValueHandler = ({ target }) => {
    const { name, value } = target;
    if (name === "name") {
      setInputValue({ ...inputValue, [name]: value });
    } else {
      // 다른 방법 찾아보기(algorithm 구현, 정규식 사용)
      const structedCost = Number(value.replace(/,/g, ""));
      if (isNaN(structedCost)) {
        return alert("숫자만 입력해주세요.");
      }
      // toLocaleString TIL 정리
      setInputValue({
        ...inputValue,
        [name]: structedCost.toLocaleString("ko-KR"),
      });
    }
  };

  const saveBtnClickHandler = () => {
    if (inputValue.name === "") {
      return alert("이름을 입력하세요.");
    } else {
      alert(`{name : ${inputValue.name}, price : ${inputValue.cost}}`);
      setInputValue({
        name: "",
        cost: 0,
      });
    }
  };

  const onClickSelect = (event) => {
    const isActive = event.currentTarget.className.indexOf("active") !== -1;
    const isHidden = event.currentTarget.className.indexOf("hidden") !== -1;
    if (isActive) {
      event.currentTarget.className = isHidden ? "select hidden" : "select";
    } else {
      event.currentTarget.className = isHidden
        ? "select hidden active"
        : "select active";
    }
  };

  const onClickOption = (event) => {
    setSelectedValue(event.currentTarget.innerHTML);
  };

  const onClickOption2 = (event) => {
    setSelectedValue2(event.currentTarget.innerHTML);
  };

  //JSX
  return (
    <div>
      <h1>Button</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <StyledBtn
            name="Primary"
            onClick={BtnClickHandler}
            size="Large"
            bordercolor="lightblue"
          >
            <Btnlabel
              title="Large Primary Button"
              imoticon="👺"
              bordercolor="lightblue"
            />
          </StyledBtn>

          <StyledBtn size="Midium" backcolor="lightblue">
            <Btnlabel title="Midium" />
          </StyledBtn>

          <StyledBtn size="Small" backcolor="lightblue">
            <Btnlabel title="Small" />
          </StyledBtn>
        </div>

        <div
          style={{
            display: "flex",
          }}
        >
          <StyledBtn
            name="Negative"
            onClick={BtnClickHandler}
            size="Large"
            bordercolor="pink"
            type="Negative"
          >
            <Btnlabel title="Large Negative Button" imoticon="☠️" />
          </StyledBtn>
          <StyledBtn size="Midium" backcolor="pink" type="Negative">
            <Btnlabel title="Midium" />
          </StyledBtn>
          <StyledBtn size="Small" backcolor="pink" type="Negative">
            <Btnlabel title="Small" />
          </StyledBtn>
        </div>
      </div>

      <h1>Input</h1>

      <div
        style={{
          display: "flex",
          gap: 20,
        }}
      >
        <div>
          이름
          <input
            name="name"
            type="text"
            onChange={changeInputValueHandler}
            value={inputValue.name}
          />
        </div>
        <div>
          가격
          <input
            maxLength="20"
            name="cost"
            type="text"
            onChange={changeInputValueHandler}
            value={inputValue.cost}
          />
        </div>
        <StyledBtn
          onClick={saveBtnClickHandler}
          size="Small"
          backcolor="lightblue"
        >
          <Btnlabel title="저장" />
        </StyledBtn>
      </div>

      <h1>Modal</h1>

      <div>
        <StyledBtn
          bordercolor="lightblue"
          size="Large"
          className="Open"
          onClick={openModalHandler}
        >
          <Btnlabel title="Open Modal" imoticon="😤" />
        </StyledBtn>
        <Modal
          modalname="Modal1"
          closeModalHandler={closeModalHandler}
          isOpen={isOpen}
          title="Modal Type 1"
        />
        <StyledBtn
          size="Midium"
          type="Negative"
          backcolor="pink"
          className="Open2"
          onClick={openModalHandler2}
        >
          <Btnlabel title="Open Modal" />
        </StyledBtn>
        <Modal
          modalname="Modal2"
          closeModalHandler={closeModalHandler2}
          isOpen={isOpen2}
          title="Modal Type 2"
        />
      </div>

      <h1>Select</h1>

      <div id="overflowBox">
        {/* component로 만들기 */}
        <div name="hidden" onClick={onClickSelect} className="select hidden">
          <div className="text">
            <div className="label">{selectedValue}</div>
            <div className="label">▼</div>
          </div>
          <ul className="option-list">
            <li onClick={onClickOption} className="option">
              리액트
            </li>
            <li onClick={onClickOption} className="option">
              자바
            </li>
            <li onClick={onClickOption} className="option">
              스프링
            </li>
            <li onClick={onClickOption} className="option">
              리액트네이티브
            </li>
          </ul>
        </div>
        {/* component로 만들기 */}
        <div name="show" onClick={onClickSelect} className="select">
          <div className="text">
            <div className="label">{selectedValue2}</div>
            <div className="label">▼</div>
          </div>
          <ul className="option-list">
            <li onClick={onClickOption2} className="option">
              리액트
            </li>
            <li onClick={onClickOption2} className="option">
              자바
            </li>
            <li onClick={onClickOption2} className="option">
              스프링
            </li>
            <li onClick={onClickOption2} className="option">
              리액트네이티브
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

//Styled Component
const StyledBtn = styled.button`
  // Fixed : 테두리 둥글기
  border-radius: 8px;

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

//Component
function Btnlabel({ title, imoticon = "" }) {
  const style =
    imoticon === "" ? { display: "none" } : { visibility: "visible" };
  return { imoticon } === "" ? (
    <label>{title}</label>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 5,
      }}
    >
      <label>{title}</label>
      <label style={style}>{imoticon}</label>
    </div>
  );
}
