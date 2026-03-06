import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../context/currentUserContext";
import "./Header.css";

function Header({ HandleSignInClick, handleSignOut, isProfilePage}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <header className="header__section">
      <div className={`header__title ${isProfilePage ? "header__title-profile" : "header__title"}`}>NewsExplorer</div>
      <>
        {currentUser !== undefined ? (
          <div className="header__buttons">
            <Link to="/">
              <button className={`header__home ${isProfilePage ? "header__home-profile" : "header__home"}`}>Home</button>
            </Link>
            <Link to="/profile">
            <button className={`header__saved-articles ${isProfilePage ? "header__saved-articles-profile" : "header__saved-articles"}`}>Saved Articles</button>
            </Link>
            <Link to="/">
            <button className={`header__user-btn ${isProfilePage ? "header__user-btn-profile" :"header__user-btn"}`} onClick={handleSignOut}> Oscar</button>
            </Link>
          </div>
        ) : (
          <div className="header__buttons">
            <Link to="/">
              <button className="header__home">Home</button>
            </Link>
            <button className="header__sign_in" onClick={HandleSignInClick}>
              Sign In
            </button>
          </div>
        )}
      </>
    </header>
  );
}

export default Header;
