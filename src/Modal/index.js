import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({children, setOpenModal}) {

  const modalClose = (event) => {
    setOpenModal(false);
  };  

  return ReactDOM.createPortal(
    <div className="Modal">
      {children}
      <button onClick={modalClose} className="Modal-close">
        X
      </button>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };