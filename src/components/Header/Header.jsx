import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../context/currentUserContext";
import "./Header.css";

function Header({ HandleSignInClick, handleSignOut, isProfilePage }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <header className="header__section">
      <div
        className={`header__title ${
          isProfilePage ? "header__title-profile" : "header__title"
        }`}
      >
        NewsExplorer
      </div>
      <>
        {currentUser !== undefined ? (
          <div className="header__buttons">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "header__home_active" : "header__home_inactive"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "header__profile_active" : "header__profile_inactive"
              }
            >
              Saved Articles
            </NavLink>
            <Link className="header__oscar" to="/">
              <button
                className={`header__user-btn ${
                  isProfilePage
                    ? "header__user-btn-profile"
                    : "header__user-btn"
                }`}
                onClick={handleSignOut}
              >
                Oscar
              </button>
            </Link>
          </div>
        ) : (
          <div className="header__buttons">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "header__link_active" : "header__link_inactive"
              }
            >
              Home
            </NavLink>
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
