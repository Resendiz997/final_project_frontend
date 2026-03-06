import React from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  isOpen,
  btnText,
  btnRedirect,
  closeActiveModal,
  activeModal,
  setActiveModal,
  handleSubmit,
  handleInputChnage,
}) {
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className={`modal__content modal__content_${activeModal}`}>
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close-btn"
          onClick={closeActiveModal}
          type="button"
        ></button>
        <form className="modal__form"
        onSubmit={handleSubmit}
        onChange={handleInputChnage}>
          {children}
          <div className="modal__buttons">
            <button className="modal__submit-btn" type="submit">
              {btnText}
            </button>
            <button className="modal__redirect-btn" type="button" onClick={() => {
            if (activeModal === "Sign In") {
              setActiveModal("Sign Up");
            } else {
              setActiveModal("Sign In");
            }}
        }>
              {btnRedirect}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
