import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "../Main/Main";


import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");

  return (
    <Router>
      <div className="page">
        <div className="page__content"> 
          <Routes>
            <Route
              path="/"
              element={
                <Main
                title= 'Pump2Easy'
                btnText='Log in'
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
