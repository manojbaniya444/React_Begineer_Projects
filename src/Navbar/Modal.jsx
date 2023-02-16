import React from "react";

const Modal = ({handleCloseModal}) => {
  return <div className="modal"><button onClick={handleCloseModal}>Close Modal</button ></div>;
};

export default Modal;
