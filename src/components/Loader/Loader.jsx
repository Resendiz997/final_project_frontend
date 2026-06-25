import "./Loader.css";

function Loader() {
  return (
    <>
      <div className="search__loader">
        Searching for news..
        <svg className="spinner" width="96" height="96" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="grad1">
              <stop offset="0%" stopColor="black" />
              <stop offset="100%" stopColor="grey" />
            </linearGradient>
          </defs>

          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#grad1)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="180"
            strokeDashoffset="60"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="0.75s"
              from="0 50 50"
              to="360 50 50"
            />  
          </circle>
        </svg>
      </div>
    </>
  );
}

export default Loader;
