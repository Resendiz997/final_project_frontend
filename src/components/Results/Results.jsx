import { useState } from "react";

import "./Results.css";
import Article from "../Article/Article";

function Results({
  articles,
  HandleSignInClick,
  handleSave,
  currentUser,
  loggedIn,
  savedArticle,
  handleDelete
}) {
  const [displayedArticles, setDisplayedArticles] = useState(3);

  const handleDisplayedArticles = () => {
    setDisplayedArticles((prev) => prev + 3);
  };

  return (
    <div className="results__container">
      <h2 className="results__header">Search resutls</h2>
      <ul className="results__section">
        {articles
          .slice(0, displayedArticles)
          .map(({ article: articleData, keyword: searchData }) => {
            console.log('Individual item:', { article: articleData, keyword: searchData });
            return (
              <Article
                articleData={articleData}
                searchData={searchData}
                handleDelete={handleDelete}
                savedArticle={savedArticle}
                loggedIn={loggedIn}
                currentUser={currentUser}
                handleSave={handleSave}
                HandleSignInClick={HandleSignInClick}
                key={articleData.id}
              />
            );
          })}
      </ul>
      <button className="results__more-btn" onClick={handleDisplayedArticles}>
        Show more{" "}
      </button>
    </div>
  );
}

export default Results;
