import "./ErrorLoader.css";
import notFound from "../../images/notFound.png";

function ErrorLoader() {
  return (
    <div className="error">
      <img src={notFound} alt="error" className="error__photo" />
      <h1 className="error__header">Nothing found</h1>
      <div className="error__message">
        Sorry, but nothing matched your search terms
      </div>
    </div>
  );
}

export default ErrorLoader;
