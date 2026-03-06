import "./Article.css";

function Article({ article, HandleSignInClick, handleSave }) {
  return (
    <div className="article__container">
        {/* button conditionally render the saved article button*/}
      <button
        className="article__save-btn"
        onClick={() => handleSave(article)}
      ></button>
      <button className="article__sign-in" onClick={HandleSignInClick}>
        {" "}
        Sign in to save articles{" "}
      </button>
      <img
        src={article.urlToImage}
        alt={article.title}
        className="article__image"
      />
      <div className="article__publish">{article.publishedAt}</div>
      <div className="article__main">
        <h2 className="article__title">{article.title}</h2>
        <p className="article__description">{article.description}</p>
      </div>
      <div className="article__source">{article.source.name}</div>
    </div>
  );
}

export default Article;
