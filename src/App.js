import React, { useState } from "react";
import "./styles/App.css";
import Modal from "./components/Modal";
import ButtonLabel from "./components/ButtonLabel";
import StyledBtn from "./components/StyledBtn";

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
  const openModalHandler = (event) => {
    event.currentTarget.name === "Modal1" ? setIsOpen(true) : setIsOpen2(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
    setIsOpen2(false);
  };

  const stBtnClickHandler = (event) => {
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
            onClick={stBtnClickHandler}
            size="Large"
            bordercolor="lightblue"
          >
            <ButtonLabel
              title="Large Primary Button"
              imoticon="👺"
              bordercolor="lightblue"
            />
          </StyledBtn>

          <StyledBtn size="Midium" backcolor="lightblue">
            <ButtonLabel title="Midium" />
          </StyledBtn>

          <StyledBtn size="Small" backcolor="lightblue">
            <ButtonLabel title="Small" />
          </StyledBtn>
        </div>

        <div
          style={{
            display: "flex",
          }}
        >
          <StyledBtn
            name="Negative"
            onClick={stBtnClickHandler}
            size="Large"
            bordercolor="pink"
            type="Negative"
          >
            <ButtonLabel title="Large Negative Button" imoticon="☠️" />
          </StyledBtn>
          <StyledBtn size="Midium" backcolor="pink" type="Negative">
            <ButtonLabel title="Midium" />
          </StyledBtn>
          <StyledBtn size="Small" backcolor="pink" type="Negative">
            <ButtonLabel title="Small" />
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
          <ButtonLabel title="저장" />
        </StyledBtn>
      </div>

      <h1>Modal</h1>

      <div>
        <StyledBtn
          name="Modal1"
          bordercolor="lightblue"
          size="Large"
          className="Open"
          onClick={openModalHandler}
        >
          <ButtonLabel title="Open Modal" imoticon="😤" />
        </StyledBtn>
        <Modal
          name="Modal1"
          modalname="Modal1"
          closeModalHandler={closeModalHandler}
          isOpen={isOpen}
          title="Modal Type 1"
        />
        <StyledBtn
          name="Modal2"
          size="Midium"
          type="Negative"
          backcolor="pink"
          className="Open2"
          onClick={openModalHandler}
        >
          <ButtonLabel title="Open Modal" />
        </StyledBtn>
        <Modal
          name="Modal2"
          modalname="Modal2"
          closeModalHandler={closeModalHandler}
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
