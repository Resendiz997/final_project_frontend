import {useState} from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SignUp.css";



function SignUp ({ title, isOpen, activeModal, btnText, btnRedirect, closeActiveModal,handleRegister, HandleSignInClick, setActiveModal}){
   
   const [formData, setFormData] = useState({
    email:"",
    password:"",
    username:""
    });

      const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister(formData)
      }
    
   
   
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
   
   
    return(
        <ModalWithForm handleRegister={handleRegister} title={title} isOpen={isOpen} activeModal={activeModal} btnText={btnText} btnRedirect={btnRedirect} closeActiveModal={closeActiveModal} HandleSignInClick={HandleSignInClick} setActiveModal={setActiveModal} handleSubmit={handleSubmit}>
        <div className="modal__labels">
      <label htmlFor="email" className="modal__label">
        Email
        <input type="email" name="email" className="modal__input" placeholder="Enter email" required onChange={handleInputChange}/>
      </label>
      <label htmlFor="Password" className="modal__label">
        Password
        <input type="password" name="password" className="modal__input" placeholder="Enter password" required onChange={handleInputChange}/>
      </label>
      <label htmlFor="username" className="modal__label">
        Username
        <input type="username" name="username" className="modal__input" placeholder="Enter your username" required onChange={handleInputChange}/>
      </label>
      </div>
      </ModalWithForm>
    )
}


export default SignUp;