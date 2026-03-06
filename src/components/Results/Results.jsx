import { useState } from "react";

import "./Results.css";
import Article from "../Article/Article";



function Results({articles, HandleSignInClick, handleSave}) {



  const [displayedArticles, setDisplayedArticles] = useState(3);
  


  const handleDisplayedArticles =()=>{
    setDisplayedArticles((prev)=>
      prev+3
    );
  };


return (
    <div className="results__container">
      <h2 className="results__header">Search resutls</h2>
      <ul className="results__section">
        {articles.slice(0,displayedArticles).map((article)=>{
         return (
          <Article
          handleSave={handleSave}
          HandleSignInClick={HandleSignInClick}
          article={article}
          key={article.id}/>
         );
        })}
      </ul>
      <button className="results__more-btn" onClick={handleDisplayedArticles}>Show more </button>
    </div>
  );
}

export default Results;
