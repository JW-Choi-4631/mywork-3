import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import styled from "styled-components";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: "",
    cost: 0,
  });
  const [selectedValue, setSelectedValue] = useState("리액트");

  const openModalHandler = ({ target }) => {
    target.className === "Open" ? setIsOpen(true) : setIsOpen2(true);
  };

  const closeModalHandler = ({ currentTarget }) => {
    console.log(currentTarget);
    currentTarget.className === "Modal-Div"
      ? setIsOpen2(false)
      : setIsOpen(false);
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
    if (isActive) {
      event.currentTarget.className = "select";
    } else {
      event.currentTarget.className = "select active";
    }
  };

  const onClickOption = (event) => {
    setSelectedValue(event.currentTarget.innerHTML);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <h1>Button</h1>
        <div
          style={{
            display: "flex",
          }}
        >
          <StyledBtn
            name="Primary"
            onClick={BtnClickHandler}
            size="Large"
            borderColor="lightblue"
          >
            <Btnlabel
              title="Large Primary Button"
              imoticon="👺"
              borderColor="lightblue"
            />
          </StyledBtn>
          <StyledBtn size="Midium" backColor="lightblue">
            <Btnlabel title="Midium" />
          </StyledBtn>
          <StyledBtn size="Small" backColor="lightblue">
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
            borderColor="pink"
            type="Negative"
          >
            <Btnlabel title="Large Negative Button" imoticon="☠️" />
          </StyledBtn>
          <StyledBtn size="Midium" backColor="pink" type="Negative">
            <Btnlabel title="Midium" />
          </StyledBtn>
          <StyledBtn size="Small" backColor="pink" type="Negative">
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
            maxlength="20"
            name="cost"
            type="text"
            onChange={changeInputValueHandler}
            value={inputValue.cost}
          />
        </div>
        <StyledBtn
          onClick={saveBtnClickHandler}
          size="Small"
          backColor="lightblue"
        >
          <Btnlabel title="저장" />
        </StyledBtn>
      </div>

      <h1>Modal</h1>
      <div>
        <button className="Open" onClick={openModalHandler}>
          Open Modal
        </button>
        <Modal
          modalname="Modal1"
          closeModalHandler={closeModalHandler}
          isOpen={isOpen}
          title="Modal Type 1"
        />
        <button className="Open2" onClick={openModalHandler}>
          Open Modal
        </button>
        <Modal
          modalname="Modal2"
          closeModalHandler={closeModalHandler}
          isOpen={isOpen2}
          title="Modal Type 2"
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: 10,
          height: 60,
          overflow: "hidden",
          border: "2px solid lightgray",
          marginTop: 30,
        }}
      >
        {/* overflow:hidden 해제하는 방법 찾아보기 */}
        <select
          style={{
            height: 20,
          }}
        >
          <option>리액트</option>
          <option>자바</option>
          <option>스프링</option>
          <option>리액트네이티브</option>
        </select>
        <div onClick={onClickSelect} className="select">
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
      </div>
    </div>
  );
}

export default App;

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
    props.borderColor !== undefined ? props.borderColor : "default"};
  // Option 4. 배경 색깔 : 흰색 이외의 색깔 지정 시
  background-color: ${(props) =>
    props.backColor !== undefined ? props.backColor : "white"};
`;

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
