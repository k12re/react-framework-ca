import { useState } from "react";
import * as Styled from "../../App.styles";
import { Link } from "react-router-dom";

export function Search(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchResults([]);
    const results = props.data.filter((item) => {
      return item.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    props.setSearchResults(results);
  };

  return (
    <div>
      <Styled.SearchFormContainer>
        <form id="search-form" onKeyUp={handleSearch}>
          <label htmlFor="search"></label>
          <input
            name="search"
            id="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </form>
      </Styled.SearchFormContainer>
    </div>
  );
}
