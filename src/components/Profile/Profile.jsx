import { useContext } from "react";
import CurrentUserContext from "../../context/currentUserContext";

import "./Profile.css";
import Article from "../Article/Article";

function Profile({ savedArticle }) {
  console.log("saved articl ein profile", savedArticle);
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="saved__article-header">
      <div className="saved__article-top">Saved articles</div>
      <h1 className="saved__article-title">
        {" "}
        Elise, you have 5 saved articles{" "}
      </h1>
      <div className="saved__article-keywords">By Keywords: </div>
      <div className="saved__article-container">
        <ul className="saved__article">
          {savedArticle.map((article) => {
            return <Article article={article} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
