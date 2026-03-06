import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import Search from "../Search/Search";
import Footer from "../Footer/Footer";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Profile from "../Profile/Profile";
import Results from "../Results/Results";
import SuccessModal from "../SuccessModal/SuccessModal";
import CurrentUserContext from "../../context/currentUserContext";

import { authorize, register } from "../../utils/auth";

import { searchArticles } from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [articles, setArticles] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedArticle, setSavedArticle] = useState([]);

  const closeActiveModal = () => {
    console.log("closeActiveModal called, current activeModal:", activeModal);
    setActiveModal("");
    document.activeElement.blur();
  };

  const HandleSignInClick = () => {
    setActiveModal("Sign In");
  };

  const handleSignOut = () => {
    setStayLoggedIn(false);
    setCurrentUser(undefined);
  };

  const handleRegister = async (formData) => {
    const { email, username, password } = formData;
    register({ email, username, password })
      .then((data) => {
        console.log(data);
        setUserName(username);
        closeActiveModal();
        setActiveModal("Registration successfully completed!");
        setStayLoggedIn(true);
      })
      .catch((err) => {
        console.error(err);
        alert("Registration failed. Please try again.");
      });
  };

  const handleLogin = async (formData) => {
    const { email, password } = formData;
    try {
      const response = await authorize({ email, password });
      localStorage.setItem("token", response.token);
      setStayLoggedIn(true);
      setIsLoggedIn(true);
      console.log(formData);
      setCurrentUser(formData);
      console.log(currentUser);
      closeActiveModal();
    } catch (error) {
      console.error(error);
      alert("Log in failed , please try again.");
    }
  };

  const handleSearchRequest = ({ keyword }) => {
    searchArticles({ keyword })
      .then((res) => {
        console.log(res.articles);
        setArticles(res.articles);
      })
      .catch((err) => {
        console.error(err);
        alert("Search result not found");
      });
  };

  const handleSave = (article) => {
    setSavedArticle((prev) => {
      const exists = prev.some((item) => item.id === article.id);

      if (exists) {
        return prev.filter((item) => item.id !== article.id);
      } else {
        return [...prev, article];
      }
    });
    console.log(article);
    console.log("saving article", savedArticle)
  };

  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={`page ${isProfilePage ? "profile__page" : "page"}`}>
        <div className="page__content">
          <Header
            isProfilePage={isProfilePage}
            HandleSignInClick={HandleSignInClick}
            isLoggedIn={isLoggedIn}
            handleSignOut={handleSignOut}
          />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Search handleSearchRequest={handleSearchRequest} />
                  {articles.length !== 0 ? (
                    <Results
                      handleSave={handleSave}
                      HandleSignInClick={HandleSignInClick}
                      articles={articles}
                    />
                  ) : (
                    <About />
                  )}
                </>
              }
            />
            <Route
              path="/profile"
              element={<Profile savedArticle={savedArticle} />}
            />
          </Routes>
          <SignIn
            title="Sign In"
            isOpen={activeModal === "Sign In"}
            activeModal={activeModal}
            btnText="Sign In"
            btnRedirect=" or Sign Up"
            closeActiveModal={closeActiveModal}
            setActiveModal={setActiveModal}
            handleLogin={handleLogin}
          />
          <SignUp
            title="Sign Up"
            isOpen={activeModal === "Sign Up"}
            activeModal={activeModal}
            btnText="Sign Up"
            btnRedirect="or Sign In"
            closeActiveModal={closeActiveModal}
            setActiveModal={setActiveModal}
            handleRegister={handleRegister}
          />
          <SuccessModal
            title="Registration successfully completed!"
            activeModal={activeModal}
            isOpen={activeModal === "Registration successfully completed!"}
            closeActiveModal={closeActiveModal}
            setActiveModal={setActiveModal}
          />
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
