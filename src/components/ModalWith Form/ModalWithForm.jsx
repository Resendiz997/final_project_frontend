import "./ModalWithForm.css"; 

function ModalWithForm(
    {
    title,
    children,
    btnText,
    activeModal,
    setActiveModal
}){
    return(
        <div className= "modal__open" >
        <div className="modal__content">
          <h2 className="modal__title">{title}</h2>
          
          <button 
            className="modal__close-btn" 
            type="button"
          >
          </button>
          <form className="modal__form">
            {children}
          <div className="modal__buttons">
            <button 
              type="submit" 
              className="modal__submit-btn"
            >
              {btnText}
            </button>
            <button className="modal__submit-btn-redirect"
          type='button'
          onClick={() => {
            if (activeModal === "Sign in") {
              setActiveModal("Sign up");
            } else {
              setActiveModal("Sign in");
            }
          }}
          >
          </button>
            </div>
          </form>
          </div>
          </div>
    )
};


export default ModalWithForm;
