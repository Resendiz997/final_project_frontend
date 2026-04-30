import { useState } from "react";

import "./Search.css";

function Search({handleSearchRequest}) {

    const [searchData, setSearchData] = useState({
        keyword:""
        });


        const handleSearchSubmit = (e) => {
            e.preventDefault();
            handleSearchRequest({keyword : searchData.keyword});
            console.log({keyword : searchData.keyword})
          }

    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearchData((prev) => ({
          ...prev,
          [name]: value,
        }));
    }


  return (
    <div className="search__section">
      <h1 className="search__prompt">What's going on in the world?</h1>
      <p className="search__underwritting">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form>
        <input className="search__bar"  name="keyword" type="search" id="keyword" placeholder="Enter topic" onChange={handleSearchChange}/>
        <button className="search__button" type="submit"  onClick={handleSearchSubmit}>Search</button>
      </form>
    </div>
  );
}

export default Search;
