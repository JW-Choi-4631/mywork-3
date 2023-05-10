import "../style/Modal.css";

function Modal({ modalname, closeModalHandler, isOpen, title }) {
  if (isOpen) {
    return modalname === "Modal1" ? (
      <div className="Modal-Div">
        <div className="Modal">
          <div className="Sub-Modal-1">
            <header>{title}</header>
            <div className="Btn-Box">
              <button onClick={closeModalHandler}>확인</button>
              <button onClick={closeModalHandler}>취소</button>
            </div>
          </div>
          <div>닫으려면 확인 또는 취소를 누르세요.</div>
        </div>
      </div>
    ) : (
      <div onClick={closeModalHandler} className="Modal-Div">
        <div onClick={(event) => event.stopPropagation()} className="Modal">
          <div className="Sub-Modal-1">
            <header>{title}</header>
            <div className="Btn-Box">
              <button onClick={closeModalHandler}>닫기</button>
            </div>
          </div>
          <div>닫으려면 화면 아무곳이나 누르세요.</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Modal;
