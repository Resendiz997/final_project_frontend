import "./SignIn.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function SignIn({ title, isOpen, activeModal, btnText, btnRedirect, closeActiveModal, HandleSignInClick, setActiveModal, handleLogin }) {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData)
  }



  return (
    <ModalWithForm  handleInputChange={handleInputChange} handleSubmit={handleSubmit} title={title} handleLogin={handleLogin} isOpen={isOpen} activeModal={activeModal} btnText={btnText} btnRedirect={btnRedirect} closeActiveModal={closeActiveModal} HandleSignInClick={HandleSignInClick} setActiveModal={setActiveModal}>
        <div className="modal__labels">
      <label htmlFor="email" className="modal__label">
        Email
        <input onChange={handleInputChange} value={formData.email} type="email" name="email" className="modal__input" placeholder="Enter email" required/>
      </label>
      <label htmlFor="Password" className="modal__label">
        Password
        <input  onChange={handleInputChange} value={formData.password} type="password" name="password" className="modal__input" placeholder="Password" required/>
      </label>
      </div>
    </ModalWithForm>
  );
}

export default SignIn;
