import { useState } from "react";
import "./Main.css";
import ModalWithForm from "../ModalWith Form/ModalWithForm";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";


function Main({title, btnText,activeModal, setActiveModal}) {
  const [formData, setFormData] = useState({
    name: "",
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

  return (
    <ModalWithForm 
    title={title} 
    btnText={btnText}
    activeModal= {activeModal}
    setActiveModal={setActiveModal}>

     <h1 className="modal__prompt">Log in to start a better you! </h1>
     <ToggleSwitch/>
      <label className="modal__label">
        Email{""}
        <input
          value={formData.email}
          type="text"
          name="email"
          onChange={handleInputChange}
          className="modal__input"
          id="log-in-email"
          placeholder="you@example.com"
          required
        />
      </label>
      <label className="modal__label">
        Password{""}
        <input
          value={formData.password}
          type="password"
          onChange={handleInputChange}
          name="password"
          className="modal__input"
          id="log-in-password"
          placeholder="Password"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default Main;
