import "./Article.css";
import CurrentUserContext from "../../context/currentUserContext";
import { useContext } from "react";

function Article({
  articleData,
  searchData,
  HandleSignInClick,
  handleSave,
  savedArticle,
  isProfilePage,
  handleDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formatedDate = new Date(articleData.publishedAt).toLocaleString(
    "en-US",
    options
  );

  return (
    <div className="article__container">
      <div
        className={`article__keyword-profile ${
          isProfilePage ? "article__keyword-profile" : "article__keyword"
        }`}
      >
        {searchData}
      </div>
      <button
        className={`article__save-btn ${
          isProfilePage
            ? "article__delete-btn"
            : currentUser !== undefined &&
              savedArticle?.some(
                (item) =>
                  item.article &&
                  item.article.author === articleData.author &&
                  item.article.title === articleData.title
              )
            ? "article__save-btn_checked"
            : ""
        }`}
        onClick={() =>
          isProfilePage
            ? handleDelete(articleData)
            : currentUser !== undefined &&
              handleSave({ article: articleData, keyword: searchData })
        }
      />
      {currentUser !== undefined && isProfilePage ? (
        <button
          className="article__sign-in article__sign-in_profile"
          onClick={handleDelete}
        >
          {" "}
          Remove from saved{" "}
        </button>
      ) : currentUser === undefined ? (
        <button className="article__sign-in" onClick={HandleSignInClick}>
          {" "}
          Sign in to save articles{" "}
        </button>
      ) : null}
      <img
        src={articleData.urlToImage}
        alt={articleData.title}
        className="article__image"
      />
      <div className="article__publish">{formatedDate}</div>
      <div className="article__main">
        <h2 className="article__title">{articleData.title}</h2>
        <p className="article__description">{articleData.description}</p>
      </div>
      <div className="article__source">{articleData.source.name}</div>
    </div>
  );
}

export default Article;
