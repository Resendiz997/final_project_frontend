import "./SuccessModal.css";

function SuccessModal({ title, isOpen, activeModal, closeActiveModal, setActiveModal}) {
  return (
    <div className={`modal ${isOpen ? "modal__opened" : ""}`}>
      <div className={`modal__content modal__content_${activeModal}`}>
        <div className="success__container">
            <div className="success__content">
          <div className="success__close-btn" onClick={closeActiveModal}></div>
          <h1 className="success__header">{title}</h1>
          <button className="success__redirect-btn" onClick={()=>{setActiveModal("Sign In")}}> Sign In </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default SuccessModal;
