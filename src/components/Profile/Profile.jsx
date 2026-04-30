import { useContext } from "react";
import CurrentUserContext from "../../context/currentUserContext";

import "./Profile.css";
import Article from "../Article/Article";
import { searchArticles } from "../../utils/api";

function Profile({ savedArticle, isProfilePage, handleDelete }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="saved__article-header">
      <div className="saved__article-top">Saved articles</div>
      <h1 className="saved__article-title">
        {" "}
        Elise, you have 5 saved articles{" "}
      </h1>
      <div className="saved__article-prompt">
        {" "}
        By Keywords:{" "}
        <span className="saved__article-keywords">
          {/* {[...new Set(savedArticle.map((item) => item.keyword))].slice(0,3).join(", ")+ `${item.keyword.length -3} more`} */}
          {((keyword) =>
            keyword.slice(0, 3).join(", ") +
            (keyword.length > 3 ? ` +${keyword.length - 3} more` : ""))([
            ...new Set(savedArticle.map((item) => item.keyword)),
          ])}
        </span>
      </div>
      <div className="saved__article-container">
        <ul className="saved__article">
          {savedArticle.map(({ article: articleData, keyword: searchData }) => {
            return (
              <Article
                articleData={articleData}
                searchData={searchData}
                savedArticle={savedArticle}
                isProfilePage={isProfilePage}
                handleDelete={handleDelete}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
