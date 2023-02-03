import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(
    <div className="bg-black/70 left-0 right-0 top-0 bottom-0 flex fixed z-10 justify-center items-center">
      {children}
    </div>,
    elRef.current
  );
};

export default Modal;
